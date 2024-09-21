
<template>
  <Icon :iconName="'swipe-down-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-04'
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
