
<template>
  <Icon :iconName="'delivery-return-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryReturn02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-return-02'
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
