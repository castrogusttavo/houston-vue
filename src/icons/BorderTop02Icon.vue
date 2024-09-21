
<template>
  <Icon :iconName="'border-top-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderTop02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-top-02'
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
