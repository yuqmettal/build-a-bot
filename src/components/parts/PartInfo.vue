<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import partsMixin from './get-parts-mixin';

export default {
  mixins: [partsMixin],
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
      return this.parts[partType].find((p) => p.id === id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
