
<template>
  <Icon :iconName="'stroke-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-top'
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
