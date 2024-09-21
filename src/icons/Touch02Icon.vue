
<template>
  <Icon :iconName="'touch-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-02'
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
