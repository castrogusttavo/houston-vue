
<template>
  <Icon :iconName="'swipe-down-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-02'
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
