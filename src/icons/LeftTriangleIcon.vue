
<template>
  <Icon :iconName="'left-triangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftTriangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-triangle'
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
