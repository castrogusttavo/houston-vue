
<template>
  <Icon :iconName="'stroke-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-bottom'
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
