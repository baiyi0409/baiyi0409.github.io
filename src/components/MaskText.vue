<template>
  <div
    class="max-w-3xl mx-auto flex flex-col items-center justify-center text-center py-16 sm:py-20 lg:py-24 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8"
  >
    <div class="relative w-full" >
      <h2
        class="whitespace-pre-line leading-tight sm:leading-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight transition-all duration-300 hover:text-gray-900"
      >
        {{title}}
      </h2>
      <div class="fade-out"></div>
    </div>
    <p
      class="max-w-lg mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-12 text-gray-600"
    >
      {{description}}
    </p>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  description?: string
}>()

</script>

<style scoped>
.fade-out {
    background-image: linear-gradient(#f4f4f500, #f4f4f5d1 64%, #f4f4f5 90%, #f4f4f5);
    width: 100%;
    height: 100%;
    position: absolute;
    inset: auto 0% -5%;
    pointer-events: none;
    --tw-exit-opacity: 0;
}
</style>