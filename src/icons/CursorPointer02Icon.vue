
<template>
  <Icon :iconName="'cursor-pointer-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorPointer02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-pointer-02'
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
