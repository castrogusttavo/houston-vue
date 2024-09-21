
<template>
  <Icon :iconName="'dialpad-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DialpadSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dialpad-square-02'
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
