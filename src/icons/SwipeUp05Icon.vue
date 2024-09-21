
<template>
  <Icon :iconName="'swipe-up-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-05'
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
