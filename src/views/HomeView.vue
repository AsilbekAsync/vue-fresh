<script setup lang="ts">
import Field from "@/components/InputField.vue";
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-200">
    <div
      class="max-w-2xl max-lg:max-w-sm max-lg:mx-5 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 w-full"
    >
      <div class="px-4 py-6 text-center">
        <h5 class="text-gray-700 tracking-tighter text-xl">Hello World</h5>
      </div>
      <div class="px-12 py-12 space-y-2">
        <Field label="Username" placeholder="admin" />
        <Field label="Password" placeholder="****" />
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>
