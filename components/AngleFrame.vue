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
  const width = getFrameRatio(
    props.baseAngleItem.sensorFormat.width,
    props.baseAngleItem.lensFocalLength,
    props.angleItem.sensorFormat.width,
    props.angleItem.lensFocalLength
  );
  const height = getFrameRatio(
    props.baseAngleItem.sensorFormat.height,
    props.baseAngleItem.lensFocalLength,
    props.angleItem.sensorFormat.height,
    props.angleItem.lensFocalLength
  );
  return {
    color: "#f00",
    fontSize: "12px",
    fontWeight: "bold",
    border: "2px solid",
    width: `${width * 100}%`,
    height: `${height * 100}%`,
  };
});
</script>

<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }"
  >
    <div :style="style">{{ angleItem.lensFocalLength }}mm</div>
  </div>
</template>
