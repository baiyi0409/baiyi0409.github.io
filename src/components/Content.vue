<template>
  <div class="space-y-24 md:space-y-32 lg:space-y-40 pt-32">
    <!-- 顶部导航栏 -->
    <div id="float-nav-container"
      class="fixed bottom-0 left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto z-50 transition-opacity duration-300">
      <nav
        class="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900  rounded-full shadow-lg px-3 py-2">
        <ul class="flex flex-row items-center space-x-2">
          <li v-for="(item, index) in navItems" :key="index">
            <button :data-nav-id="item.id"
              class="nav-button rounded-full text-sm transition-all duration-300 whitespace-nowrap px-3 py-1.5 w-full text-neutral-500 hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-neutral-800">
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
            <img src="/src/assets/avatar.jpg" infersize="true" alt="yao" width="940" height="940" loading="lazy"
              decoding="async"
              class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-zinc-200 shadow-sm" />
          </div>
          <!-- 介绍 -->
          <div class="flex flex-col md:px-4 items-center md:items-start text-center md:text-left w-full">
            <h1 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-2 leading-tight">
              {{ hero.name }}
            </h1>
            <div class="mb-6 w-full">
              <p
                class="text-gray-800 dark:text-gray-300 whitespace-pre-wrap text-sm sm:text-base leading-relaxed max-w-prose">
                {{ hero.text }}
              </p>
            </div>
            <a class="-ml-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 sm:px-3 sm:py-1 text-sm leading-6 text-black ring-1 ring-zinc-200 bg-white ring-inset hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-200 touch-manipulation min-h-[44px] sm:min-h-auto"
              target="_blank" href="">
              联系我
              <div class="h-2 w-2 rounded-full bg-black border-2 border-black"></div>
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

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-0">
        <!-- Hero Card -->
        <div class="col-span-12 md:col-span-12 gap-4 flex flex-col">

          <div class="col-span-12 md:col-span-12 bg-white rounded-3xl p-6 md:p-8">

            <!-- 基本信息 -->
            <div class="h-full flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-4xl md:text-5xl font-bold text-gray-900">{{ feature_herocard.name }}</div>
                  <span class="text-xs md:text-sm text-gray-500 font-medium">{{ feature_herocard.nameDescription }}</span>
                </div>
              </div>
              <div>

                <!-- 联系方式 -->
                <div class="flex flex-row flex-wrap gap-2 mb-4" v-for="(item, index) in feature_herocard.linkList"
                  :key="index">
                  <a :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
                    <div
                      class="bg-zinc-100 text-gray-600 hover:bg-zinc-200 transition-all duration-200 cursor-pointer rounded-full px-3 py-2 flex flex-row items-center gap-1.5">
                      <span>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24">
                          <path fill="currentColor" :d="item.path">
                          </path>
                        </svg>
                      </span>
                      <!-- <div class="text-xs">{formattedCount}</div> -->
                    </div>
                  </a>
                </div>

                <!-- 标签   -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="(item,index) in feature_herocard.tagList" :key="index"
                    class="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="item.path"></path>
                    </svg>
                    {{item.tag}}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Movie -->
        <div class="col-span-12 md:col-span-12 md:row-span-2 bg-white rounded-2xl p-5 flex flex-col justify-between">

          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">{{feature_movie.title}}</h3>
            <div class="flex items-center flex-fow gap-2">
              <div class="flex flex-wrap gap-2">
                <span v-for="(item,index) in feature_movie.tagList" :key="index" class="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">{{ item }}</span>
              </div>
              <div class="text-sm text-gray-500">{{feature_movie.count}}</div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-2">
            <!-- 渲染真实海报 -->
            <a v-for="(item,index) in feature_movie.movieList" :key="index" :href="item.href" target="_blank" rel="noopener noreferrer">
              <div
                class="bg-gray-200 rounded-sm overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out aspect-[135/188]">
                <picture>
                  <source :srcset="item.webp" type="image/webp">
                  <source :srcset="item.avif" type="image/avif">
                  <img :src="item.img" :alt="item.title" :title="item.title" loading="lazy" width="270" height="382" decoding="async" class="w-full h-full object-cover">
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
    </div>

    <!-- poe部分 -->
    <div id="poe">
      <Poe />
    </div>
  </div>


</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from "vue";
import MaskText from './MaskText.vue';
import Poe from './Poe.vue';
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

少年负剑走风雪，老来听雨忆江湖`
})

//feature部分
const feature = reactive({
  text: `简单了解一下我
闯荡、勇敢尝试、不放弃`,
  description: `You know, my mother used to say that risk-takers defy destine.`
})

const feature_herocard = reactive({
  name: '藥',
  nameDescription: '(yao)',
  linkList:[
    { link: 'https://github.com/baiyi0409', path: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2' }
  ],
  tagList: [
    { tag:'开发者', path:'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'},
    { tag:'创作者', path:'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'},
    { tag:'AI 爱好者', path:'M13 10V3L4 14h7v7l9-11h-7z'},
  ]
})

const feature_movie = reactive(
{
  title:'文娱爱好',
  tagList:['科幻','动画','剧情','悬疑'],
  count:'12+ 部收藏',
  movieList:[
    { title:'画江湖之不良人', href:'https://movie.douban.com/subject/35801116/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2877529911.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2877529911.webp', avif:'' },
    { title:'这个杀手不太冷', href:'https://movie.douban.com/subject/1295644/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2913554676.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2913554676.webp',avif:'' },
    { title:'肖申克的救赎', href:'https://movie.douban.com/subject/1292052/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p480747492.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p480747492.webp',avif:'' },
    { title:'盗梦空间', href:'https://movie.douban.com/subject/3541415/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p524109102.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p524109102.webp',avif:'' },
    { title:'星际穿越', href:'https://movie.douban.com/subject/3541415/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2614988097.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2614988097.webp',avif:'' },
    { title:'头号玩家', href:'https://movie.douban.com/subject/4920389/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2885725226.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2885725226.webp',avif:'' },
    { title:'烈日灼心', href:'https://movie.douban.com/subject/24719063/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2262236348.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2262236348.webp',avif:'' },
    { title:'风犬少年的天空', href:'https://movie.douban.com/subject/30413128/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2610396866.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2610396866.webp',avif:'' },
    { title:'移动迷宫', href:'https://movie.douban.com/subject/21349345/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2201485029.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2201485029.webp',avif:'' },
    { title:'熔炉', href:'https://movie.douban.com/subject/5912992/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p1363250216.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p1363250216.webp',avif:'' },
    { title:'阳光灿烂的日子', href:'https://movie.douban.com/subject/1291875/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2582722114.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2582722114.webp',avif:'' },
    { title:'白夜追凶', href:'https://movie.douban.com/subject/26883064/', img:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2554352027.webp', webp:'https://raw.githubusercontent.com/baiyi0409/cdn/refs/heads/main/blog/movie/p2554352027.webp',avif:'' },
  ]
})

//shorts部分
const shorts = reactive({
  text: `欲买桂花同载酒
终不似，少年游`,
  description: `The wind never stops blowing we just forget how to run.`
})


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