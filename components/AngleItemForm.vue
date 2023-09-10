<script setup lang="ts">
import { AngleItem } from "~/types";
import { SENSOR_FORMATS } from "~/constants/sensorFormats";
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
  <div>
    <select v-model="sensorFormatIndex">
      <option v-for="(sensorFormat, i) in SENSOR_FORMATS" :key="i" :value="i">
        {{ sensorFormat.name }}
      </option>
    </select>
    <input type="number" v-model="lensFocalLength" />
    <button type="button" @click="remove">remove</button>
  </div>
</template>
