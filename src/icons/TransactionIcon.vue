
<template>
  <Icon :iconName="'transaction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransactionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transaction'
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
