
<template>
  <Icon :iconName="'delivery-box-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryBox02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-box-02'
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
