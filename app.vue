<script setup lang="ts">
import {} from "~/lib/sizeCalculator";
import { AngleItem } from "~/types";
import AngleFrame from "~/components/AngleFrame.vue";
import AngleItemForm from "~/components/AngleItemForm.vue";
import { SENSOR_FORMATS, COLORS } from "~/constants";

useHead({ title: "レンズ焦点距離と画角のシミュレーター" });

const angleItems = ref<AngleItem[]>([]);

const createAngleItem = (partial: Partial<AngleItem>) => {
  const id = Math.max(...angleItems.value.map((o) => o.id), 0) + 1;
  return {
    id,
    color: COLORS[id % COLORS.length],
    sensorFormat: SENSOR_FORMATS[0],
    lensFocalLength: 50,
    ...partial,
  };
};

const baseAngleItem = computed<AngleItem>(() =>
  createAngleItem({
    sensorFormat: SENSOR_FORMATS[0],
    lensFocalLength: 20,
  })
);

const addAngleItem = () => {
  angleItems.value.push(createAngleItem({}));
};

const removeAngleItem = (index: number) => {
  angleItems.value = angleItems.value.filter((_, i) => i !== index);
};

onMounted(() => addAngleItem());
</script>

<template>
  <div class="max-w-4xl mx-auto pb-10">
    <h1 class="font-bold text-center py-5">
      レンズ焦点距離と画角のシミュレーター
    </h1>
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
    <div class="flex flex-col gap-2 px-3 md:px-0">
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
        <span><FontAwesomeIcon icon="fa-solid fa-add" /></span>追加
      </button>
    </p>
  </div>
</template>
