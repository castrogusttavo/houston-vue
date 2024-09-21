
<template>
  <Icon :iconName="'voucher'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VoucherIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'voucher'
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
