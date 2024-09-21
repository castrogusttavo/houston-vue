
<template>
  <Icon :iconName="'drag-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Drag02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-02'
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
