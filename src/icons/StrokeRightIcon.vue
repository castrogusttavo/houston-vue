
<template>
  <Icon :iconName="'stroke-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-right'
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
