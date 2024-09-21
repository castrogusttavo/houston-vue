
<template>
  <Icon :iconName="'cursor-info-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorInfo02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-info-02'
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
