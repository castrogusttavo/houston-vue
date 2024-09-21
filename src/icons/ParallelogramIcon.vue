
<template>
  <Icon :iconName="'parallelogram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParallelogramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'parallelogram'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
