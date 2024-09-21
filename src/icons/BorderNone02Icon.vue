
<template>
  <Icon :iconName="'border-none-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderNone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-none-02'
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
