
<template>
  <Icon :iconName="'delivery-delay-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryDelay02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-delay-02'
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
