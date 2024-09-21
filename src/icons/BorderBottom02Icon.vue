
<template>
  <Icon :iconName="'border-bottom-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderBottom02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-bottom-02'
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
