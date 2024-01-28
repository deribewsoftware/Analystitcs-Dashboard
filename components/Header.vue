<template>
  <header class="stick bg-background/80 top-0 z-20 backdrop-blur border-b dark:border-gray-600 border-slate-100 relative">
  <div class="container flex h-16 items-center justify-between">
    <!-- logo and Title -->
    <div class="flex gap-3 itemse-center">
       <!-- logo and Title -->
      <img src="../public/icon.svg" alt="Analytics logo" class="h-7 w-7 object-contain">

       <!-- Title -->
       <NuxtLink to="/" class="text-xl font-bold">Analytics</NuxtLink>
    </div>
     <!-- right side of header -->
     <div class="flex items-center gap-5 relative">
      <button
      @click="toggleTheme"
      aria-label="Toggle theme"
       class="flex items-center justify-center shrink-0 h-9 w-9 rounded-full border bg-background">
        <Icon name="heroicons:sun" class="h-5 w-5"/>
      </button>
      <HMenu>
   <HMenuButton class="flex items-center justify-center shrink-0 h-9 w-9 rounded-full border bg-background overflow-hidden">
    <img src="https://xsgames.co/randomusers/assets/avatars/male/68.jpg" alt="logged in user" class="h-full w-full" >
   </HMenuButton>
  <TransitionScale :scale="0.8" origin="top right">
   <HMenuItems class="absolute top-6 mt-6 bg-background z-10 w-48 right-0 rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <div class="border-b px-3 py-1.5 text-sm">
      <p class="font-semibold">Hello John</p>
      <a href="mailto:deribewsoftware@gmailcom" class="text-muted-foreground leading-none">deribewsoftware@gmailcom</a>
    </div>
    <div class="p-1">
      <template v-for="(p,i) in profileMenuOptions" :key="i">
        <HMenuItem v-if="!p.divider"  v-slot="{active}">
          <button @click="p.click?.()" :class="[active && 'bg-muted']" class="inline-flex items-center w-full p-2 rounded-md font-medium text-sm">
{{ p.title }}
          </button>
        </HMenuItem>
        <hr v-if="p.divider" class="my-1"/>

      </template>
    </div>
   </HMenuItems>
  </TransitionScale>
      </HMenu>
     </div>
  </div>
  </header>
</template>
<script setup lang="ts">
const mode=useColorMode();
const toggleTheme=()=>{
  mode.value=mode.value=='light'? 'dark' : 'light';
}
const profileMenuOptions=[
  {title:"Profile"},
  {title:"Billing"},
  {title:"Settings"},
  {title:"Team Members"},
  {title:"Sales"},
  {divider:true},
  {title:"Logout",click:()=>alert("Logout")}
]
</script>