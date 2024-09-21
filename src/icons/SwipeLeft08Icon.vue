
<template>
  <Icon :iconName="'swipe-left-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-08'
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
