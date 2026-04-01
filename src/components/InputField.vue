<template>
  <div class="w-full">
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-800">
      {{ props.label }}
    </label>
    <input
      :id="id"
      type="text"
      class="py-2 w-full px-4 rounded block border border-gray-300 bg-white sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-transparent focus:ring-offset-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
      :placeholder="props.placeholder ?? ''"
      autocomplete="off"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const id = computed(() => Math.random().toString(36).slice(2));
</script>
