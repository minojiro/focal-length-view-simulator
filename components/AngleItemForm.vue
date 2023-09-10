<script setup lang="ts">
import { AngleItem } from "~/types";
import { SENSOR_FORMATS } from "~/constants";
import { PropType } from "vue";

const props = defineProps({
  angleItem: {
    type: Object as PropType<AngleItem>,
    required: true,
  },
});
const emits = defineEmits(["update", "remove"]);

const updateAngleItem = (partial: Partial<AngleItem>) => {
  emits("update", { ...props.angleItem, ...partial });
};

const sensorFormatIndex = computed({
  get() {
    return SENSOR_FORMATS.findIndex(
      (f) => f.name === props.angleItem.sensorFormat.name
    );
  },
  set(index) {
    updateAngleItem({ sensorFormat: SENSOR_FORMATS[index] });
  },
});

const lensFocalLength = computed({
  get() {
    return props.angleItem.lensFocalLength;
  },
  set(lensFocalLength) {
    updateAngleItem({ lensFocalLength });
  },
});

const remove = () => {
  emits("remove");
};
</script>

<template>
  <div class="card card-compact bg-base-200 shadow-xl">
    <div class="card-body flex-wrap flex flex-row items-center">
      <div class="text-xl px-3" :style="{ color: props.angleItem.color }">
        <FontAwesomeIcon icon="fa-solid fa-camera" />
      </div>
      <div class="flex gap-3 flex-[999] line-height-1 items-center flex-wrap">
        <select v-model="sensorFormatIndex" class="select select-bordered">
          <option
            v-for="(sensorFormat, i) in SENSOR_FORMATS"
            :key="i"
            :value="i"
          >
            {{ sensorFormat.name }}
          </option>
        </select>
        <input
          type="number"
          class="input input-bordered"
          v-model="lensFocalLength"
        />
        mm
      </div>
      <div class="flex-1 text-center">
        <button type="button" class="btn btn-ghost" @click="remove" role="削除">
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  </div>
</template>
