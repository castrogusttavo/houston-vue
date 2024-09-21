
<template>
  <Icon :iconName="'drag-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-right-02'
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
