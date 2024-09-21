
<template>
  <Icon :iconName="'cursor-hold-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorHold02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-hold-02'
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
