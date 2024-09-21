
<template>
  <Icon :iconName="'cursor-progress-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorProgress02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-progress-02'
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
