
<template>
  <Icon :iconName="'swipe-down-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-03'
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
