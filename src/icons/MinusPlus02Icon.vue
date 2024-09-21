
<template>
  <Icon :iconName="'minus-plus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusPlus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-plus-02'
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
