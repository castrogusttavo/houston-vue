
<template>
  <Icon :iconName="'do-not-touch-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DoNotTouch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'do-not-touch-02'
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
