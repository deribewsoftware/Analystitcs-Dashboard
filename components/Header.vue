<template>
  <header class="stick bg-background/80 top-0 z-20 backdrop-blur border-b dark:border-gray-600 border-slate-100 ">
  <div class="container flex h-16 items-center justify-between">
    <!-- logo and Title -->
    <div class="flex gap-3 itemse-center">
       <!-- logo and Title -->
      <img src="../public/icon.svg" alt="Analytics logo" class="h-7 w-7 object-contain">

       <!-- Title -->
       <NuxtLink to="/" class="text-xl font-bold">Analytics</NuxtLink>
    </div>
     <!-- right side of header -->
     <div class="flex items-center gap-5">
      <button
      @click="toggleTheme"
      aria-label="Toggle theme"
       class="flex items-center justify-center shrink-0 h-9 w-9 rounded-full border bg-background">
        <Icon name="heroicons:sun" class="h-5 w-5"/>
      </button>
     </div>
  </div>
  </header>
</template>
<script setup lang="ts">
const mode=useColorMode();
const toggleTheme=()=>{
  mode.value=mode.value=='light'? 'dark' : 'light';
}
</script>