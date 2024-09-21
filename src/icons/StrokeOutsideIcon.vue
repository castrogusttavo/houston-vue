
<template>
  <Icon :iconName="'stroke-outside'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeOutsideIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-outside'
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
