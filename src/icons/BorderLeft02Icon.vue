
<template>
  <Icon :iconName="'border-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-left-02'
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
