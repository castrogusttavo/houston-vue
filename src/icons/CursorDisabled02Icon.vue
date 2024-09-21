
<template>
  <Icon :iconName="'cursor-disabled-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorDisabled02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-disabled-02'
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
