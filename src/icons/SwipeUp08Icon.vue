
<template>
  <Icon :iconName="'swipe-up-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-08'
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
