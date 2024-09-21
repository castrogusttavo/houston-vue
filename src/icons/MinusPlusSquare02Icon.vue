
<template>
  <Icon :iconName="'minus-plus-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusPlusSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-plus-square-02'
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
