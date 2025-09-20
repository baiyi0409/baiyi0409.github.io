<template>
  <div class="space-y-24 md:space-y-32 lg:space-y-40 pt-32">
    <!-- 顶部导航栏 -->
    <div
      id="float-nav-container"
      class="fixed bottom-0 left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto z-50 transition-opacity duration-300"
    >
      <nav
        class="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border rounded-full shadow-lg px-3 py-2"
      >
        <ul class="flex flex-row items-center space-x-2">
          <li>
            <button
              data-nav-id="top"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800"
            >
              返回顶部
            </button>
          </li>
          <li>
            <button
              data-nav-id="feature"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800"
            >
              了解下我
            </button>
          </li>
          <li>
            <button
              data-nav-id="shorts"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800"
            >
              最新动态
            </button>
          </li>
          <li>
            <button
              data-nav-id="poe"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800"
            >
              信条
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- hero部分 -->
    <div id="hero" class="container mx-auto">
      <section class="w-full max-w-sm mx-auto px-8 sm:px-6">
        <div class="flex flex-col items-center md:items-start gap-6 sm:gap-8">
          <!-- 头像 -->
          <div class="flex-shrink-0">
            <img
              src="/src/assets/avatar.jpg"
              infersize="true"
              alt="yao"
              width="940"
              height="940"
              loading="lazy"
              decoding="async"
              class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-zinc-200 shadow-sm"
            />
          </div>
          <!-- 介绍 -->
          <div
            class="flex flex-col md:px-4 items-center md:items-start text-center md:text-left w-full"
          >
            <h1
              class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-2 leading-tight"
            >
              {{ hero.name }}
            </h1>
            <div class="mb-6 w-full">
              <p
                class="text-gray-800 dark:text-gray-300 whitespace-pre-wrap text-sm sm:text-base leading-relaxed max-w-prose"
              >
                {{ hero.text }}
              </p>
            </div>
            <a
              class="-ml-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 sm:px-3 sm:py-1 text-sm leading-6 text-black ring-1 ring-zinc-200 bg-white ring-inset hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-200 touch-manipulation min-h-[44px] sm:min-h-auto"
              target="_blank"
              href=""
            >
              联系我
              <div
                class="h-2 w-2 rounded-full bg-black border-2 border-black"
              ></div>
              <div class="h-2 w-2 rounded-full border-black border-2"></div>
            </a>
            <!-- {socials && (
				<div class="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
					{socials.map((social: any) => (
						<a
							class="inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 sm:px-3 sm:py-1 text-sm leading-6 text-black ring-1 ring-zinc-200 bg-white ring-inset hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-200 touch-manipulation min-h-[44px] sm:min-h-auto"
							target="_blank"
							href={social.url}
						>
							{social.type}
						</a>
					))}
				</div>
			)} -->
          </div>
        </div>
      </section>
    </div>

    <!-- feature部分 -->
    <div id="feature">
      <MaskText :title="feature.text" :description="feature.description" />
    </div>

    <!-- short部分 -->
    <div id="shorts" class="container max-w-6xl mx-auto">
      <MaskText :title="shorts.text" :description="shorts.description" />
    </div>

    <!-- poe部分 -->
    <div id="poe">
      <Poe/>
    </div>
  </div>


</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref , reactive} from "vue";
import MaskText from './MaskText.vue';
import Poe from './Poe.vue';

//hero介绍
const hero = reactive({
  name: `yao`,
  text: `00 后小镇程序员
.Net 应用开发者，半个全栈工程师

徒步爱好者🏔`
})

//feature部分
const feature = reactive({
  text:`简单了解一下我
闯荡、勇敢尝试、不放弃`,
  description:`You know, my mother used to say that risk-takers defy destine.`
})

//shorts部分
const shorts = reactive({
  text:`欲买桂花同载酒
终不似，少年游`,
  description:`The wind never stops blowing we just forget how to run.`
})


// 导航配置
const navItems = [
  { id: "top", label: "返回顶部", offset: 0 },
  { id: "feature", label: "了解下我", offset: -80 },
  { id: "shorts", label: "最新动态", offset: -80 },
  { id: "poe", label: "信条", offset: -80 },
];

// 响应式：当前激活区块
const activeSectionId = ref("top");

// 平滑滚动函数
const scrollToSection = (id: string, offset: number = 0) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const top = element.offsetTop + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

// 更新导航按钮样式
const updateNavButtonClasses = () => {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    const buttonId = button.getAttribute("data-nav-id");
    if (buttonId === activeSectionId.value) {
      button.classList.add("!text-primary", "font-bold");
    } else {
      button.classList.remove("!text-primary", "font-bold");
    }
  });
};

// 滚动监听函数（带节流）
let throttleTimer: number | null = null;
const onScroll = () => {
  if (throttleTimer) return;
  throttleTimer = window.setTimeout(() => {
    throttleTimer = null;

    const scrollPosition = window.scrollY + 100; // 增加100px缓冲，更早激活
    let currentActiveId = "top";

    for (const item of navItems) {
      if (item.id === "top") continue;

      const element = document.getElementById(item.id);
      if (!element) continue;

      const sectionTop = element.offsetTop + (item.offset || 0);
      const sectionBottom = sectionTop + element.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentActiveId = item.id;
        break;
      }
    }

    if (activeSectionId.value !== currentActiveId) {
      activeSectionId.value = currentActiveId;
      updateNavButtonClasses();
    }
  }, 100); // 节流100ms
};

// 初始化导航
const initializeNavigation = () => {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    const id = button.getAttribute("data-nav-id");
    if (id) {
      button.addEventListener("click", () => {
        const item = navItems.find((nav) => nav.id === id);
        if (item) scrollToSection(item.id, item.offset);
      });
    }
  });

  window.addEventListener("scroll", onScroll);
  onScroll(); // 初始化时执行一次
};

// 组件挂载 & 卸载
onMounted(() => {
  initializeNavigation();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

</script>

<style scoped>
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.relative {
  position: relative;
}
.whitespace-pre-line {
  white-space: pre-line;
}

</style>