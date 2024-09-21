
<template>
  <Icon :iconName="'swipe-down-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-05'
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
