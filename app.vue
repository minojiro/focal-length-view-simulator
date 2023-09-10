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
  <div class="max-w-4xl mx-auto">
    <div class="relative mb-5">
      <img
        src="//placehold.jp/300x200.png"
        alt=""
        class="w-full"
        width="300"
        height="200"
      />
      <AngleFrame
        v-for="angleItem in angleItems"
        :key="`frame-${angleItem.id}`"
        :angleItem="angleItem"
        :baseAngleItem="baseAngleItem"
      />
    </div>
    <div class="flex flex-col gap-2">
      <AngleItemForm
        v-for="(angleItem, i) in angleItems"
        :key="`form-${angleItem.id}`"
        :angleItem="angleItem"
        @update="(val) => (angleItems[i] = val)"
        @remove="() => removeAngleItem(i)"
      />
    </div>
    <p class="mt-5 text-center">
      <button
        @click.prevent="addAngleItem"
        class="btn btn-active btn-primary min-w-[50%]"
      >
        add
      </button>
    </p>
  </div>
</template>
