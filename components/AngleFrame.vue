<script setup lang="ts">
import { getFrameRatio } from "~/lib/sizeCalculator";
import { AngleItem, SensorFormat } from "~/types";
import { PropType } from "vue";

const props = defineProps({
  baseAngleItem: {
    type: Object as PropType<AngleItem>,
    required: true,
  },
  angleItem: {
    type: Object as PropType<AngleItem>,
    required: true,
  },
});

const style = computed(() => {
  const width = Math.min(
    getFrameRatio(
      props.baseAngleItem.sensorFormat.width,
      props.baseAngleItem.lensFocalLength,
      props.angleItem.sensorFormat.width,
      props.angleItem.lensFocalLength
    ),
    1
  );
  const height = Math.min(
    getFrameRatio(
      props.baseAngleItem.sensorFormat.height,
      props.baseAngleItem.lensFocalLength,
      props.angleItem.sensorFormat.height,
      props.angleItem.lensFocalLength
    ),
    1
  );
  return {
    color: "#f00",
    width: `${width * 100}%`,
    height: `${height * 100}%`,
  };
});
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      :style="style"
      class="border border-2 border-current font-bold text-sm"
    >
      {{ angleItem.lensFocalLength }}mm（{{ angleItem.sensorFormat.name }}）
    </div>
  </div>
</template>
