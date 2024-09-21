
<template>
  <Icon :iconName="'right-to-left-list-triangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightToLeftListTriangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-to-left-list-triangle'
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
