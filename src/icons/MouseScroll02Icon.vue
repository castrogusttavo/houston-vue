
<template>
  <Icon :iconName="'mouse-scroll-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseScroll02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-scroll-02'
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
