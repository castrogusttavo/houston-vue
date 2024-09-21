
<template>
  <Icon :iconName="'delivery-tracking-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryTracking02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-tracking-02'
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
