<template>
  <div class="space-y-24 md:space-y-32 lg:space-y-40 pt-32">
    <!-- 顶部导航栏 -->
    <div id="float-nav-container"
      class="fixed bottom-0 left-1/2 -translate-x-1/2 md:top-4 md:bottom-auto z-50 transition-opacity duration-300">
      <nav
        class="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-full shadow-lg px-3 py-2">
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
            <img src="https://cdn.buffz.top/avatar.jpg" infersize="true" alt="yao" width="940" height="940"
              loading="lazy" decoding="async"
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
        <div class="col-span-12 md:col-span-12 grid grid-cols-1 md:grid-cols-[8fr_4fr] gap-4">
          <div class="bg-white rounded-2xl p-5 flex flex-col justify-between">
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
                <div class="flex flex-row flex-wrap gap-2 mb-4" v-for="(item, index) in feature_herocard.linkList"
                  :key="index">
                  <a :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
                    <div
                      class="bg-zinc-100 text-gray-600 hover:bg-zinc-200 transition-all duration-200 cursor-pointer rounded-full px-3 py-2 flex flex-row items-center gap-1.5">
                      <span>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24">
                          <path fill="currentColor" :d="item.path"></path>
                        </svg>
                      </span>
                      <!-- <div class="text-xs">{formattedCount}</div> -->
                    </div>
                  </a>
                </div>

                <!-- 标签   -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="(item, index) in feature_herocard.tagList" :key="index"
                    class="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.path"></path>
                    </svg>
                    {{ item.tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 flex flex-col justify-between min-h-[150px]">
            <div class="relative h-full overflow-hidden rounded-xl to-indigo-50">
              <div class="absolute w-full top-0 left-0 animate-scroll" :class="{ paused: !isScrolling }"
                @mouseenter="pauseScroll" @mouseleave="resumeScroll">
                <div v-for="(event, index) in duplicatedEvents" :key="index"
                  class="px-4 py-3 mx-2 my-2 bg-white cursor-pointer transform hover:scale-[1.02]">
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
        <div class="col-span-12 md:col-span-12 md:row-span-2 bg-white rounded-2xl p-5 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">
              {{ feature_movie.title }}
            </h3>
            <div class="flex items-center flex-fow gap-2">
              <div class="flex flex-wrap gap-2">
                <span v-for="(item, index) in feature_movie.tagList" :key="index"
                  class="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">{{ item }}</span>
              </div>
              <div class="text-sm text-gray-500">{{ feature_movie.count }}</div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-2">
            <!-- 渲染真实海报 -->
            <a v-for="(item, index) in feature_movie.movieList" :key="index" :href="item.href" target="_blank"
              rel="noopener noreferrer">
              <div
                class="bg-gray-200 rounded-sm overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out aspect-[135/188]">
                <picture>
                  <source :srcset="item.webp" type="image/webp" />
                  <source :srcset="item.avif" type="image/avif" />
                  <img :src="item.img" :alt="item.title" :title="item.title" loading="lazy" width="270" height="382"
                    decoding="async" class="w-full h-full object-cover" />
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

      <div class="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6 break-inside-avoid px-3">
        <a class="block" target="_blank" v-for="(article, index) in articles" :key="index" :href="article.url">
          <div class="h-full overflow-auto bg-white rounded-2xl p-5">
            <div class="p-1 mt-4 whitespace-pre-line">
              {{ article.title }}
              <br />
              {{ article.content }}
              <br />
              {{ article.blog_url }}
              <div class="text-xs text-gray-400 relative-time" data-date="2025-08-22T23:00:35.000Z">
                {{ article.time }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- poe部分 -->
    <div id="poe">
      <Poe />
    </div>
  </div>

  <!-- 项目部分 -->
  <footer class="overflow-hidden max-w-7xl mt-32 mx-auto dark:bg-neutral-900">
    <div class="container px-4 sm:px-8 md:px-12 mx-auto max-w-5xl" >
      <div 
        class="bg-white rounded-2xl sm:rounded-4xl py-6 sm:py-12 px-4 sm:px-16 border border-zinc-100 dark:border-zinc-800 dark:bg-neutral-800">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-8 w-full mb-6 last:mb-0" v-for="(item,index) in projects"  :key="index">
          <h3
            class="text-black dark:text-white text-base lg:text-xl font-medium mb-2 sm:mb-6 pt-1 sm:pt-2 leading-5 sticky top-0 bg-white dark:bg-neutral-800 py-2 sm:py-0 sm:static">
            {{ item.year }} </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-0 flex-1 w-full" > 
            <div
              :href="item.url"
              class="px-3 sm:px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-700 flex flex-col text-zinc-500 dark:text-zinc-400 text-sm hover:text-black dark:hover:text-white transition-colors duration-200"
              target="_blank" :title="item.description"> 
              <span
                class="leading-5 line-clamp-1 text-zinc-600 dark:text-zinc-400 text-sm font-medium"> {{ item.name }} </span> 
                <span class="line-clamp-1 text-zinc-400 dark:text-zinc-500 text-xs sm:text-sm"> {{ item.description }} </span>
            </div>
            </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 py-4 sm:py-6 border-t border-zinc-100 dark:border-zinc-800">
        <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center">
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
import BulletScreen from "./BulletScreen.vue";
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
主要方向后端开发，上位机开发

徒步登山爱好者🗻`,
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
      img: "https://cdn.buffz.top/movie/p2877529911.webp",
      webp: "https://cdn.buffz.top/movie/p2877529911.webp",
      avif: "",
    },
    {
      title: "这个杀手不太冷",
      href: "https://movie.douban.com/subject/1295644/",
      img: "https://cdn.buffz.top/movie/p2913554676.webp",
      webp: "https://cdn.buffz.top/movie/p2913554676.webp",
      avif: "",
    },
    {
      title: "肖申克的救赎",
      href: "https://movie.douban.com/subject/1292052/",
      img: "https://cdn.buffz.top/movie/p480747492.webp",
      webp: "https://cdn.buffz.top/movie/p480747492.webp",
      avif: "",
    },
    {
      title: "盗梦空间",
      href: "https://movie.douban.com/subject/3541415/",
      img: "https://cdn.buffz.top/movie/p524109102.webp",
      webp: "https://cdn.buffz.top/movie/p524109102.webp",
      avif: "",
    },
    {
      title: "星际穿越",
      href: "https://movie.douban.com/subject/3541415/",
      img: "https://cdn.buffz.top/movie/p2614988097.webp",
      webp: "https://cdn.buffz.top/movie/p2614988097.webp",
      avif: "",
    },
    {
      title: "头号玩家",
      href: "https://movie.douban.com/subject/4920389/",
      img: "https://cdn.buffz.top/movie/p2885725226.webp",
      webp: "https://cdn.buffz.top/movie/p2885725226.webp",
      avif: "",
    },
    {
      title: "烈日灼心",
      href: "https://movie.douban.com/subject/24719063/",
      img: "https://cdn.buffz.top/movie/p2262236348.webp",
      webp: "https://cdn.buffz.top/movie/p2262236348.webp",
      avif: "",
    },
    {
      title: "风犬少年的天空",
      href: "https://movie.douban.com/subject/30413128/",
      img: "https://cdn.buffz.top/movie/p2610396866.webp",
      webp: "https://cdn.buffz.top/movie/p2610396866.webp",
      avif: "",
    },
    {
      title: "移动迷宫",
      href: "https://movie.douban.com/subject/21349345/",
      img: "https://cdn.buffz.top/movie/p2201485029.webp",
      webp: "https://cdn.buffz.top/movie/p2201485029.webp",
      avif: "",
    },
    {
      title: "熔炉",
      href: "https://movie.douban.com/subject/5912992/",
      img: "https://cdn.buffz.top/movie/p1363250216.webp",
      webp: "https://cdn.buffz.top/movie/p1363250216.webp",
      avif: "",
    },
    {
      title: "阳光灿烂的日子",
      href: "https://movie.douban.com/subject/1291875/",
      img: "https://cdn.buffz.top/movie/p2582722114.webp",
      webp: "https://cdn.buffz.top/movie/p2582722114.webp",
      avif: "",
    },
    {
      title: "白夜追凶",
      href: "https://movie.douban.com/subject/26883064/",
      img: "https://cdn.buffz.top/movie/p2554352027.webp",
      webp: "https://cdn.buffz.top/movie/p2554352027.webp",
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

const articles = reactive([
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/qsvwu86cr3gsvtm3',
    title: 'EF Core和FreeSql',
    content: `EF Core、Dapper、SqlSugar、FreeSql作为.Net主流的ORM框架
    EF Core的设计理念和其他三种截然不同，这里用EF Core和FreeSql比较
    从生命周期到流程进行分析讲述`,
    blog_url: '',
    time: '2024-10-06'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/ft2d2105x57q1uef',
    title: 'Avalonia',
    content: `WPF的跨平台版本
    语法类似，学习成本低
    可能是目前.Net平台下最好用的跨平台的UI框架`,
    blog_url: '',
    time: '2025-10-01'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/zkqonkaxca6dat71',
    title: 'MVVM Tookit',
    content: `Model View ViewModel
    当模型和视图有了绑定关系
    当业务需求发生变化，只需要修改视图模型中的业务逻辑
    最大程度的解耦前后端的关联，即使放到现在也是主流的设计模式`,
    blog_url: '',
    time: '2025-04-25'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/zmit4gig4r7s09bz',
    title: 'Ollama + Anything LLM 搭建本地AIChat应用',
    content: `Ollama提供了大模型运行的平台，可以使大模型进行本地部署
    而目前市面上出现了五花八门的客户端应用，本质上的调用都是一样的
    github上类似的开源项目已经层出不穷了...`,
    blog_url: '',
    time: '2025-02-08'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/yuivuhpx3qiidna1',
    title: 'NuGet vs dll',
    content: `nupkg本质上是zip压缩包 + 规范
    能够被NuGet客户端、Visual Studio、.Net CLI识别处理
    相比dll，nupkg多了管理工具，更方便使用网络进行管理
    设置nupkg包来源为服务器，就能在IDE中实时获取最新的包版本
    更适合多人协作开发的场景`,
    blog_url: '',
    time: '2025-10-08'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/gtn0btv0y3y45myb',
    title: '工业通信协议',
    content: `相比于网络的WebSocket、Http这些通信协议
    工业通信往往在没有网络的情况下进行，将设备机的COM口和上位机COM口进行连接
    就能读取数据，从一开始的串口通信、Modbus协议，到现在带有网络参与的MQTT协议
    工业通信也逐渐现代网络化...`,
    blog_url: '',
    time: '2025-06-29'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/xomzyr5qhrasiv6c',
    title: '客户端自动更新',
    content: `翻阅了.Net客户端自动更新开源项目博主的博客
    虽然有的项目很久不更新了，但思路还是蛮现代的...`,
    blog_url: '',
    time: '2025-05-09'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/wq9rxsgu9ggifhhn',
    title: 'Blazor .Net跨平台Web方案',
    content: `.Net程序员低成本开发Web应用
    和Vue类似，但目前生态不是很完善，仍然需要熟悉html+css+Js
    使用Razor语法可能比Vue指令更好理解，比较适合中小型的后台项目
    没有对应的前端岗，一般都是.Net后端全栈在使用，和vue比较相似`,
    blog_url: '',
    time: '2024-09-06'
  },
  {
    url: 'https://www.yuque.com/u39099012/wou7u4/thaness4vuphm2dw',
    title: 'MQTT 协议入门',
    content: `MQTT 是一种基于发布/订阅模式的轻量级消息传输协议
    专门为低带宽、高延迟或不稳定的网络环境设计，通常用于IoT项目、移动应用或需要实时消息推送的系统`,
    blog_url: '',
    time: '2025-09-01'
  }
])

//项目部分  链接地址/年/项目名称/项目描述
const projects = reactive([
  {
    url:"",
    year:2025,
    name:"文档识别录入系统",
    description:"使用OpenCv获取图像数据，通过百度飞桨OCR光符识别SDK，提取并识别需要的数据字段，回填数据集，纳入数据库"
  },
  {
    url:"",
    year:2022,
    name:"数据决策系统",
    description:"对客户提供人员权限管理，并根据用户权限，提供报表、图表可视化功能，支持多种格式的转换、导出、打印"
  },
  {
    url:"",
    year:2021,
    name:"医院信息系统(HIS)",
    description:"搭建医疗业务体系全流程信息化"
  }
])

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
