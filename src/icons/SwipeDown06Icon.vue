
<template>
  <Icon :iconName="'swipe-down-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-06'
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
