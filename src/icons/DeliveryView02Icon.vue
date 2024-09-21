
<template>
  <Icon :iconName="'delivery-view-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryView02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-view-02'
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
