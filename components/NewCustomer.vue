<template>
  <section class="mt-5">
    <h1 class="font-bold">New Customers</h1>
    <div class="mt-5 w-full flex items-start gap-b border rounded-[10px] bg-background p-5 overflow-x-auto scrollbar scrollbar-thumb-input scrollbar-thumb-rounded-[5px]">
      <div class="flex shrink-0 flex-col gap-2 p-1">
        <button class="w-10 h-10 flex items-center justify-center rounded-full border  bg-muted ">
          <Icon name="heroicons:plus" class="h-5 w-5"/>

        </button>
        <div class="">
          <p class="text-sm font-semibold">Add</p>
        </div>
      </div>
      <template v-for="(n,i) in data" :key="i">
        <div class="flex shrink-0 flex-col gap-2 p-1">
          <img :src="n.picture.thumbnail" :alt="n.name.first" class="h-10 w-10 object-cover rounded-full items-center">
          <div class="text-center">
            <p class="text-sm font-semibold">{{ n.name.first }} {{ n.name.last }}</p>
            <p class="text-xs text-muted-foreground">10 minute ago</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {data,refresh,error,pending}=await useAsyncData(
  'new-customers',
  ()=>$fetch('https://randomuser.me/api/?results=20'),
  {
    default:()=>[],
    transform:(data:any)=>data.results
  }
  )

</script>

<style>

</style>