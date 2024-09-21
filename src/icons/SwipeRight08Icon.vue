
<template>
  <Icon :iconName="'swipe-right-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-08'
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
