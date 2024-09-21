
<template>
  <Icon :iconName="'border-all-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderAll02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-all-02'
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
