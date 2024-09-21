
<template>
  <Icon :iconName="'invoice'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InvoiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'invoice'
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
