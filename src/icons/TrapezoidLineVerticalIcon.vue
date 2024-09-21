
<template>
  <Icon :iconName="'trapezoid-line-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrapezoidLineVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trapezoid-line-vertical'
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
