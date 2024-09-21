
<template>
  <Icon :iconName="'swipe-up-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-03'
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
