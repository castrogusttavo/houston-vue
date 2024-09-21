
<template>
  <Icon :iconName="'swipe-up-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-02'
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
