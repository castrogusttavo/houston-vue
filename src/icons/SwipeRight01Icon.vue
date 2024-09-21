
<template>
  <Icon :iconName="'swipe-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-01'
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
