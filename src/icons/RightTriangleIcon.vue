
<template>
  <Icon :iconName="'right-triangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightTriangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-triangle'
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
