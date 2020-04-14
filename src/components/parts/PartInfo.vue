<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from '../../data/parts';

export default {
  props: {
    partType: {
      type: String,
      default: '',
    },
    id: {
      type: [Number, String],
      default: 0,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return parts[partType].find((p) => p.id === id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
