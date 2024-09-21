
<template>
  <Icon :iconName="'arrow-expand-diagonal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowExpandDiagonal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-expand-diagonal-02'
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
