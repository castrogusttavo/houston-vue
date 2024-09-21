
<template>
  <Icon :iconName="'stroke-inside'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeInsideIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-inside'
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
