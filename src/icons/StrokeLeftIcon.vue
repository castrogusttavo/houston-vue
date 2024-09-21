
<template>
  <Icon :iconName="'stroke-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-left'
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
