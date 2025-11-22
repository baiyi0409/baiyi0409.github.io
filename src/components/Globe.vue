<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import createGlobe from 'cobe'

const canvasEl = ref<HTMLCanvasElement | null>(null)

//phi 对应 经度（longitude）
//theta 对应 纬度（latitude）
const DEFAULT_LOCATION: [number, number] = [39.9042, 116.4074]
function locationToAngles([lat, lng]: [number, number]): [number, number] {
  // lat: 纬度 (-90 ~ 90)
  // lng: 经度 (-180 ~ 180)

  const phi = Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2)
  const theta = (lat * Math.PI) / 180

  return [phi, theta]
}
const [defaultPhi, defaultTheta] = locationToAngles(DEFAULT_LOCATION)

// 当前旋转角度（phi 控制左右旋转）
const phi = ref(defaultPhi)
const theta = ref(0.5)
// 目标角度（用于平滑过渡）
const targetPhi = ref(defaultPhi)
const targetTheta = ref(0.5)

// 拖拽状态
const isDragging = ref(false)
let startX = 0
let startPhi = 0

// 平滑系数（越小越“阻尼”，越大越“惯性”）
const SMOOTH_FACTOR = 0.1

onMounted(() => {
  if (!canvasEl.value) return

  const globe = createGlobe(canvasEl.value, {
    devicePixelRatio: 2,
    width: 300 * 2,
    height: 300 * 2,
    phi: phi.value,
    theta: theta.value,
    dark: 0.3,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    //scale: 2.5,
    //offset: [0, 300 * 2 * 0.4 * 0.6],
    markers: [
      //山东 117.095,36.658
      { location: [36.658,117.095 ], size: 0.08 },
      //香港 114.159,22.277
      { location: [22.277,114.159 ], size: 0.05 },
      //广东 113.326,23.114
      { location: [23.114,113.326 ], size: 0.03 },
      //江西 116.007,28.369
      { location: [28.369,116.007 ], size: 0.03 },
      //浙江 120.152,30.267
      { location: [30.267,120.152 ], size: 0.03 },
      //江苏 118.741,32.059
      { location: [32.059,118.741 ], size: 0.03 },
      //四川 103.918,33.183
      { location: [33.183,103.918 ], size: 0.05 },
      //云南 103.434,24.476
      { location: [24.476,103.434 ], size: 0.03 },
      //山西 112.578,37.813
      { location: [37.813,112.578 ], size: 0.05 },
      //阿坝 103.416,30.923
      { location: [30.923,103.416 ], size: 0.03 },
      //丽江 100.226,26.854
      { location: [26.854,100.226 ], size: 0.03 },
      //迪庆 99.680,27.789
      { location: [27.789,99.680 ], size: 0.05 },
    ],
    onRender: (state) => {
      // 平滑过渡到目标角度
      phi.value += (targetPhi.value - phi.value) * SMOOTH_FACTOR
      //theta.value += (targetTheta.value - theta.value) * SMOOTH_FACTOR
      state.phi = phi.value
      //state.theta = theta.value
    },
  })

  // 清理函数
  onBeforeUnmount(() => {
    globe.destroy()
  })
})

// 鼠标/触摸事件处理
const handlePointerDown = (clientX: number) => {
  isDragging.value = true
  startX = clientX
  startPhi = phi.value
  if (canvasEl.value) canvasEl.value.style.cursor = 'grabbing'
}

const handlePointerUp = () => {
  isDragging.value = false
  if (canvasEl.value) canvasEl.value.style.cursor = 'grab'
}

const handlePointerMove = (clientX: number) => {
  if (!isDragging.value || !canvasEl.value) return

  const delta = clientX - startX
  // 将像素位移转换为角度（根据容器宽度缩放更合理，这里简化）
  targetPhi.value = startPhi + delta * 0.01 // 0.01 是灵敏度
}

// 事件绑定（使用原生 addEventListener 更可靠）
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  const canvas = canvasEl.value
  if (!canvas) return

  // 鼠标事件
  const onMouseDown = (e: MouseEvent) => handlePointerDown(e.clientX)
  const onMouseUp = () => handlePointerUp()
  const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX)

  // 触摸事件
  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX)
  }
  const onTouchEnd = () => handlePointerUp()
  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX)
  }

  canvas.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('mousemove', onMouseMove)

  canvas.addEventListener('touchstart', onTouchStart, { passive: false })
  window.addEventListener('touchend', onTouchEnd)
  window.addEventListener('touchmove', onTouchMove, { passive: false })

  // 自动适配容器大小（可选）
  resizeObserver = new ResizeObserver(() => {
    if (canvas) {
      const size = Math.min(canvas.clientWidth, 600)
      canvas.width = size * 2
      canvas.height = size * 2
    }
  })
  resizeObserver.observe(canvas)

  // 渐显
  setTimeout(() => {
    canvas.style.opacity = '1'
  }, 0)

  // 清理
  onBeforeUnmount(() => {
    canvas.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('mousemove', onMouseMove)

    canvas.removeEventListener('touchstart', onTouchStart)
    window.removeEventListener('touchend', onTouchEnd)
    window.removeEventListener('touchmove', onTouchMove)

    resizeObserver?.disconnect()
  })
})
</script>

<template>
  <div class="w-full max-w-[300px] aspect-square mx-auto relative">
    <canvas
      ref="canvasEl"
      class="w-full h-full opacity-0 transition-opacity duration-500 cursor-grab"
      style="width: 300px; height: 300px;" />
  </div>
</template>

<style scoped>
/* 确保 canvas 不被选中 */
canvas {
  user-select: none;
  -webkit-user-drag: none;
}
</style>