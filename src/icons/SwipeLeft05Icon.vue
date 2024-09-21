
<template>
  <Icon :iconName="'swipe-left-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-05'
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
