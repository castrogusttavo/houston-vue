
<template>
  <Icon :iconName="'dice-faces-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-02'
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
