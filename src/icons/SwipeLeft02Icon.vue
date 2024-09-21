
<template>
  <Icon :iconName="'swipe-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-02'
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
