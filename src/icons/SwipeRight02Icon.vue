
<template>
  <Icon :iconName="'swipe-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-02'
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
