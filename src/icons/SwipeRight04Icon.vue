
<template>
  <Icon :iconName="'swipe-right-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-04'
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
