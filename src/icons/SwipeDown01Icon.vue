
<template>
  <Icon :iconName="'swipe-down-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-01'
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
