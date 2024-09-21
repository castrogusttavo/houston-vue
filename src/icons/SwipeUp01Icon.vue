
<template>
  <Icon :iconName="'swipe-up-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-01'
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
