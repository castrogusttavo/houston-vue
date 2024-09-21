
<template>
  <Icon :iconName="'trapezoid-line-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrapezoidLineHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trapezoid-line-horizontal'
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
