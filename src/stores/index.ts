import { defineStore } from 'pinia'
import { ref } from 'vue'

export const homeStore = defineStore('home', () => {
    const navItems = ref([
        { id: "top", label: "返回顶部", offset: 0 },
        { id: "feature", label: "了解下我", offset: -80 },
        { id: "shorts", label: "最新动态", offset: -80 },
        { id: "poe", label: "信条", offset: -80 },
    ]);

    return {
        navItems
    };
})