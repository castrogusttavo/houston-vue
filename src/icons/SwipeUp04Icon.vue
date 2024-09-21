
<template>
  <Icon :iconName="'swipe-up-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-04'
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
