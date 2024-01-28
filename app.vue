<template>
  <div class="">
    <!-- Header -->
    <Header/>
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <!-- sidebar -->
      <Sidebar class="hidden lg:block lg:col-span-3"/>
      <!-- main -->
      <main class="py-5 lg:col-span-5">
<!-- status card -->
<StatusCard/>
<!-- customers list -->
<NewCustomer/>
<!-- sales chart -->
<SalesChart/>
<!-- recent orders -->
      </main>
      <div class="">
        <!-- profie info -->
        <!-- remainders -->
      </div>
    </div>
  </div>
</template>
<script>
import { SalesChart } from '#build/components';

</script>
<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

</style>