
<template>
  <Icon :iconName="'triangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TriangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'triangle'
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
