
<template>
  <Icon :iconName="'square-unlock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareUnlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-unlock-02'
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
