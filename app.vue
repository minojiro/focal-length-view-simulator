<script setup lang="ts">
import {} from "~/lib/sizeCalculator";
import { AngleItem } from "~/types";
import AngleFrame from "~/components/AngleFrame.vue";
import AngleItemForm from "~/components/AngleItemForm.vue";
import { SENSOR_FORMATS } from "~/constants/sensorFormats";

const angleItems = ref<AngleItem[]>([]);

const genId = () => Date.now();

const baseAngleItem = computed<AngleItem>(() => ({
  id: genId(),
  sensorFormat: SENSOR_FORMATS[0],
  lensFocalLength: 20,
}));

const addAngleItem = () => {
  angleItems.value.push({
    id: genId(),
    sensorFormat: SENSOR_FORMATS[0],
    lensFocalLength: 50,
  });
};

const removeAngleItem = (index: number) => {
  angleItems.value = angleItems.value.filter((_, i) => i !== index);
};

onMounted(() => addAngleItem());
</script>

<template>
  <div>
    <div
      :style="{
        position: 'relative',
        maxWidth: '800px',
      }"
    >
      <img
        src="//placehold.jp/300x200.png"
        alt=""
        :style="{ width: '100%', verticalAlign: 'middle' }"
      />
      <AngleFrame
        v-for="angleItem in angleItems"
        :key="`frame-${angleItem.id}`"
        :angleItem="angleItem"
        :baseAngleItem="baseAngleItem"
      />
    </div>
    <AngleItemForm
      v-for="(angleItem, i) in angleItems"
      :key="`form-${angleItem.id}`"
      :angleItem="angleItem"
      @update="(val) => (angleItems[i] = val)"
      @remove="() => removeAngleItem(i)"
    />
    <button @click.prevent="addAngleItem">add</button>
  </div>
</template>
