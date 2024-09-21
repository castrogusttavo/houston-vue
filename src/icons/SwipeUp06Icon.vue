
<template>
  <Icon :iconName="'swipe-up-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-06'
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
