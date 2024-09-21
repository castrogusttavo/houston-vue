
<template>
  <Icon :iconName="'plus-minus-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinusSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus-square-02'
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
