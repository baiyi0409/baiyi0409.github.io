<template>
  <div
    ref="shortsContainer"
    class="container max-w-6xl mx-auto relative overflow-hidden h-[500px] bg-gray-50 rounded-xl"
    @mouseenter="pauseScrollShorts"
    @mouseleave="resumeScrollShorts"
  >
    <div
      v-for="item in visibleShorts"
      :key="item.id"
      class="absolute transition-none"
      :style="{
        top: item.top + 'px',
        left: getLeft(item) + 'px',
        opacity: 1,
      }"
    >
      <div
        v-if="item.content"
        class="w-72 bg-white shadow-sm px-4 py-4 rounded-lg border border-gray-200 text-s"
      >
        <!-- 标题：增加上方间距 -->
        <div class="font-semibold text-gray-900 truncate mt-2">
          {{ item.title }}
        </div>

        <!-- 内容：再增加一点间距 -->
        <div class="text-gray-600 mt-1 line-clamp-10 whitespace-pre-line">
          {{ item.content }}
        </div>

        <!-- 配图区域（如果存在图片） -->
        <div
          v-if="item.image"
          class="relative h-32 w-full overflow-hidden rounded-b-lg mt-1"
        >
          <img
            loading="lazy"
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- 作者 & 时间 -->
        <div class="flex justify-between items-center text-gray-500 mt-1">
          <span class="truncate">{{ item.author }}</span>
          <span class="flex-shrink-0">{{ item.timestamp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref,onMounted,onUnmounted} from "vue"

interface BaseShortItem {
  title: string;
  content: string;
  author: string;
  timestamp: string;
  image?: string; // 可选图片 URL
}

// 类型扩展（如果需要）
interface ShortItem extends BaseShortItem {
  id: string;
  top: number;
  startTime: number;
  speed: number;
}

const shortList = ref<BaseShortItem[]>([
  {
    title: "顶峰",
    content: `当我走了很久，第一次站在一座雪山顶上
    才知道生命如此渺小，没有什么比热烈的生活更为重要`,
    author: "藥",
    timestamp: "2025-05-11",
  },
  {
    title: "数据驱动",
    content: `从传统事件驱动，转变成数据驱动
    是实现响应式开发的基础，相较于@click，更加灵活
    当数据放生变化时，对其订阅的对象，发送通知
    从而达到数据驱动的效果`,
    author: "藥",
    timestamp: "2024-07-01",
  },
  {
    title: "想做一个产品",
    content: `制造一个产品，需要做什么
    1.根据功能设计电路板，产品外壳
    2.对电路板进行编程、烧录，实现模块功能
    3.搭建服务器，采集数据
    4.完善产品配套软件设施`,
    author: "藥",
    timestamp: "2025-04-01",
  },
]);


const isScrollingShorts = ref(true);
const visibleShorts = ref<ShortItem[]>([]);
const shortsContainer = ref<HTMLDivElement | null>(null);
const elapsedTime = ref(0); // 动画累计时间（毫秒）
let lastTimestamp = 0;
let animationId: number;
let lastAddTime = 0;

// 添加弹幕
function addRandomShort() {
  if (!shortsContainer.value || visibleShorts.value.length >= 8) return;

  const container = shortsContainer.value;
  const baseItem =
    shortList.value[Math.floor(Math.random() * shortList.value.length)];

  const newShort: ShortItem = {
    ...baseItem,
    id: `short_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    top: Math.random() * (container.clientHeight - 80),
    startTime: elapsedTime.value,
    speed: 0.1,
  };

  visibleShorts.value.push(newShort);

  setTimeout(() => {
    visibleShorts.value = visibleShorts.value.filter(
      (s) => s.id !== newShort.id
    );
  }, 15000);
}

// 控制函数
const pauseScrollShorts = () => (isScrollingShorts.value = false);
const resumeScrollShorts = () => (isScrollingShorts.value = true);

// 动画循环
function animate(timestamp: number) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const delta = timestamp - lastTimestamp;

  if (isScrollingShorts.value) {
    elapsedTime.value += delta;

    // 控制添加频率（每 3000ms 一条）
    if (elapsedTime.value - lastAddTime > 4000) {
      addRandomShort();
      lastAddTime = elapsedTime.value;
    }

    // 自动清理飞出的弹幕（可选，setTimeout 已处理）
    visibleShorts.value = visibleShorts.value.filter((short) => {
      const containerWidth = shortsContainer.value?.clientWidth ?? 1152;
      const currentLeft =
        containerWidth - (elapsedTime.value - short.startTime) * short.speed;
      return currentLeft > -260;
    });
  }

  lastTimestamp = timestamp;
  animationId = requestAnimationFrame(animate);
}

// 计算 left（在模板中调用）
const getLeft = (short: ShortItem): number => {
  if (!shortsContainer.value) return 0;
  const containerWidth = shortsContainer.value.clientWidth;
  return containerWidth - (elapsedTime.value - short.startTime) * short.speed;
};

onMounted(() => {
  lastTimestamp = performance.now();
  lastAddTime = 0;
  animationId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});

</script>

<style scoped>

</style>