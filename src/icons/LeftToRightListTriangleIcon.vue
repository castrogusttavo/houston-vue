
<template>
  <Icon :iconName="'left-to-right-list-triangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListTriangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-triangle'
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
