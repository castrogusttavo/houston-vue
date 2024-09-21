
<template>
  <Icon :iconName="'swipe-left-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-06'
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
