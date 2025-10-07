<template>
  <div class="space-y-24 md:space-y-32 lg:space-y-40 pt-32">
    <!-- 顶部导航栏 -->
    <div
      id="float-nav-container"
      class="fixed bottom-0 left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto z-50 transition-opacity duration-300"
    >
      <nav
        class="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-full shadow-lg px-3 py-2"
      >
        <ul class="flex flex-row items-center space-x-2">
          <li v-for="(item, index) in navItems" :key="index">
            <button
              :data-nav-id="item.id"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800"
            >
              {{ item.label }}
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

      <div
        class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-0"
      >
        <!-- Hero Card -->
        <div
          class="col-span-12 md:col-span-12 grid grid-cols-1 md:grid-cols-[8fr_4fr] gap-4"
        >
          <div class="bg-white rounded-3xl p-6 md:p-8">
            <!-- 基本信息 -->
            <div class="h-full flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-4xl md:text-5xl font-bold text-gray-900">
                    {{ feature_herocard.name }}
                  </div>
                  <span class="text-xs md:text-sm text-gray-500 font-medium">{{
                    feature_herocard.nameDescription
                  }}</span>
                </div>
              </div>
              <div>
                <!-- 联系方式 -->
                <div
                  class="flex flex-row flex-wrap gap-2 mb-4"
                  v-for="(item, index) in feature_herocard.linkList"
                  :key="index"
                >
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                  >
                    <div
                      class="bg-zinc-100 text-gray-600 hover:bg-zinc-200 transition-all duration-200 cursor-pointer rounded-full px-3 py-2 flex flex-row items-center gap-1.5"
                    >
                      <span>
                        <svg
                          class="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" :d="item.path"></path>
                        </svg>
                      </span>
                      <!-- <div class="text-xs">{formattedCount}</div> -->
                    </div>
                  </a>
                </div>

                <!-- 标签   -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(item, index) in feature_herocard.tagList"
                    :key="index"
                    class="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        :d="item.path"
                      ></path>
                    </svg>
                    {{ item.tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-6 md:p-8">
            <div
              class="relative h-full overflow-hidden rounded-xl to-indigo-50"
            >
              <div
                class="absolute w-full top-0 left-0 animate-scroll"
                :class="{ paused: !isScrolling }"
                @mouseenter="pauseScroll"
                @mouseleave="resumeScroll"
              >
                <div
                  v-for="(event, index) in duplicatedEvents"
                  :key="index"
                  class="px-4 py-3 mx-2 my-2 bg-white cursor-pointer transform hover:scale-[1.02]"
                >
                  <div class="font-medium text-gray-900 truncate">
                    {{ event.title }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ event.description }}
                  </div>
                  <div class="flex justify-between items-center mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Movie -->
        <div
          class="col-span-12 md:col-span-12 md:row-span-2 bg-white rounded-2xl p-5 flex flex-col justify-between"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">
              {{ feature_movie.title }}
            </h3>
            <div class="flex items-center flex-fow gap-2">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(item, index) in feature_movie.tagList"
                  :key="index"
                  class="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                  >{{ item }}</span
                >
              </div>
              <div class="text-sm text-gray-500">{{ feature_movie.count }}</div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-2">
            <!-- 渲染真实海报 -->
            <a
              v-for="(item, index) in feature_movie.movieList"
              :key="index"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="bg-gray-200 rounded-sm overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out aspect-[135/188]"
              >
                <picture>
                  <source :srcset="item.webp" type="image/webp" />
                  <source :srcset="item.avif" type="image/avif" />
                  <img
                    :src="item.img"
                    :alt="item.title"
                    :title="item.title"
                    loading="lazy"
                    width="270"
                    height="382"
                    decoding="async"
                    class="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- short部分 -->
    <div id="shorts" class="container max-w-6xl mx-auto">
      <MaskText :title="shorts.text" :description="shorts.description" />

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
          <div v-if="item.content"
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
    </div>

    <!-- poe部分 -->
    <div id="poe">
      <Poe />
    </div>
  </div>

  <footer class="overflow-hidden max-w-7xl mt-32 mx-auto dark:bg-neutral-900">
    <div class="container px-4 sm:px-8 md:px-12 mx-auto max-w-5xl">
      <div
        class="flex flex-col lg:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 py-4 sm:py-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <p
          class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center"
        >
          Designed by Nexmoe in Beijing
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import MaskText from "./MaskText.vue";
import Poe from "./Poe.vue";
import { useTitle } from "@vueuse/core";

// 导航配置
const navItems = [
  { id: "top", label: "返回顶部", offset: 0 },
  { id: "feature", label: "了解下我", offset: -80 },
  { id: "shorts", label: "最新动态", offset: -80 },
  { id: "poe", label: "信条", offset: -80 },
];

//hero介绍
const hero = reactive({
  name: `藥`,
  text: `00 后小镇程序员
👋.Net 开发工程师
主要方向上位机开发，后端开发

徒步登山爱好者🗻
相信最好的风景一定在路上

少年负剑走风雪，老来听雨忆江湖`,
});

//feature部分
const feature = reactive({
  text: `简单了解一下我
闯荡、勇敢尝试、不放弃`,
  description: `You know, my mother used to say that risk-takers defy destine.`,
});

const feature_herocard = reactive({
  name: "藥",
  nameDescription: "(yao)",
  linkList: [
    {
      link: "https://github.com/baiyi0409",
      path: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2",
    },
  ],
  tagList: [
    { tag: "开发者", path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    {
      tag: "创作者",
      path: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    },
    { tag: "AI 爱好者", path: "M13 10V3L4 14h7v7l9-11h-7z" },
  ],
});

// 控制滚动状态
const isScrolling = ref(true);

const originalEvents = ref([
  {
    title: "WinForm",
    description: "Windows平台下最便捷的图形化应用框架",
  },
  {
    title: "WPF",
    description: "MVVM设计模式的实践先驱",
  },
  {
    title: "Avalonia",
    description: "跨平台的客户端应用框架",
  },
  {
    title: "Blazor",
    description: "基于Razor和C#语言的Web应用开发框架",
  },
  {
    title: "Vue",
    description: "基于JavaScript的主流Web应用开发框架",
  },
]);

// 计算属性：复制两份用于无缝滚动
const duplicatedEvents = computed(() => {
  return [...originalEvents.value, ...originalEvents.value];
});

// 控制函数
function toggleScroll() {
  isScrolling.value = !isScrolling.value;
}

function pauseScroll() {
  isScrolling.value = false;
}

function resumeScroll() {
  isScrolling.value = true;
}

const feature_movie = reactive({
  title: "文娱爱好",
  tagList: ["科幻", "动画", "剧情", "悬疑"],
  count: "12+ 部收藏",
  movieList: [
    {
      title: "画江湖之不良人",
      href: "https://movie.douban.com/subject/35801116/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2877529911.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2877529911.webp",
      avif: "",
    },
    {
      title: "这个杀手不太冷",
      href: "https://movie.douban.com/subject/1295644/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2913554676.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2913554676.webp",
      avif: "",
    },
    {
      title: "肖申克的救赎",
      href: "https://movie.douban.com/subject/1292052/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p480747492.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p480747492.webp",
      avif: "",
    },
    {
      title: "盗梦空间",
      href: "https://movie.douban.com/subject/3541415/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p524109102.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p524109102.webp",
      avif: "",
    },
    {
      title: "星际穿越",
      href: "https://movie.douban.com/subject/3541415/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2614988097.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2614988097.webp",
      avif: "",
    },
    {
      title: "头号玩家",
      href: "https://movie.douban.com/subject/4920389/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2885725226.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2885725226.webp",
      avif: "",
    },
    {
      title: "烈日灼心",
      href: "https://movie.douban.com/subject/24719063/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2262236348.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2262236348.webp",
      avif: "",
    },
    {
      title: "风犬少年的天空",
      href: "https://movie.douban.com/subject/30413128/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2610396866.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2610396866.webp",
      avif: "",
    },
    {
      title: "移动迷宫",
      href: "https://movie.douban.com/subject/21349345/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2201485029.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2201485029.webp",
      avif: "",
    },
    {
      title: "熔炉",
      href: "https://movie.douban.com/subject/5912992/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p1363250216.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p1363250216.webp",
      avif: "",
    },
    {
      title: "阳光灿烂的日子",
      href: "https://movie.douban.com/subject/1291875/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2582722114.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2582722114.webp",
      avif: "",
    },
    {
      title: "白夜追凶",
      href: "https://movie.douban.com/subject/26883064/",
      img: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2554352027.webp",
      webp: "https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2554352027.webp",
      avif: "",
    },
  ],
});

//shorts部分
const shorts = reactive({
  text: `欲买桂花同载酒
终不似，少年游`,
  description: `The wind never stops blowing we just forget how to run.`,
});

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

.animate-scroll {
  animation: scrollUp 20s linear infinite;
}

.animate-scroll.paused {
  animation-play-state: paused;
}

@keyframes scrollUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
