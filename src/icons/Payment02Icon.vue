
<template>
  <Icon :iconName="'payment-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Payment02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'payment-02'
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
