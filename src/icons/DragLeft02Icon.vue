
<template>
  <Icon :iconName="'drag-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-left-02'
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
