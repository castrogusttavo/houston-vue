
<template>
  <Icon :iconName="'swipe-down-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-08'
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
