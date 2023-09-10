<script setup lang="ts">
import { getFrameRatio } from "~/lib/sizeCalculator";
import { AngleItem } from "~/types";
import { PropType } from "vue";
import { refDebounced } from "@vueuse/core";

const props = defineProps({
  angleItem: {
    type: Object as PropType<AngleItem>,
    required: true,
  },
  baseAngleItem: {
    type: Object as PropType<AngleItem>,
    required: true,
  },
});

const debouncedAngleItem = refDebounced(
  computed(() => props.angleItem),
  500
);

const style = computed(() => {
  const width = Math.min(
    getFrameRatio(
      props.baseAngleItem.sensorFormat.width,
      props.baseAngleItem.lensFocalLength,
      debouncedAngleItem.value.sensorFormat.width,
      debouncedAngleItem.value.lensFocalLength
    ),
    1
  );
  const height = Math.min(
    getFrameRatio(
      props.baseAngleItem.sensorFormat.height,
      props.baseAngleItem.lensFocalLength,
      debouncedAngleItem.value.sensorFormat.height,
      debouncedAngleItem.value.lensFocalLength
    ),
    1
  );
  return {
    color: props.angleItem.color,
    width: `${width * 100}%`,
    height: `${height * 100}%`,
  };
});
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      :style="style"
      class="border border-2 border-current font-bold text-sm transition-all"
    >
      <FontAwesomeIcon icon="fa-solid fa-camera" />
      {{ angleItem.lensFocalLength }}mm（{{ angleItem.sensorFormat.name }}）
    </div>
  </div>
</template>
