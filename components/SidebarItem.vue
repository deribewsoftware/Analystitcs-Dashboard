<template>
  <div class="flex flex-col border-l">
    <template v-for="(l,i) in links" :key="i">
      <NuxtLink v-if="!l.items" to="/" class="inline-flex gap-4 px-4 items-center p-3 text-left text-[15px]">
      <Icon v-if="l.icon" :name="l.icon" class="h-5 w-5 text-muted-foreground"/>
      <p class="truncate">{{ l.title }}</p>
    </NuxtLink>
    <HDisclosure v-slot="{open}" v-else>
      <HDisclosureButton class="inline-flex gap-4 px-4 items-center p-3 text-left text-[15px]">
<div  class="flex items-center gap-4">
  <Icon  v-if="l.icon" :name="l.icon" class="h-5 w-5 text-muted-foreground"/>
      <p class="truncate">{{ l.title }}</p>
</div>
<div>
  <Icon :class="[open && 'rotate-180']" name="heroicons:chevron-down" class="h-5 w-5 text-muted-foreground transition"/>
</div>
      </HDisclosureButton>
     <TransitionExpand>
      <HDisclosurePanel class="flex flex-col mx-6 px-3">
       <SidebarItem :links="l.items"/>
      </HDisclosurePanel>
     </TransitionExpand>
    </HDisclosure>

    </template>
  </div>
</template>
<script setup lang="ts">
const props=defineProps<{
  links?:any[]
}>();
</script>