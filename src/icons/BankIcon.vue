
<template>
  <Icon :iconName="'bank'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BankIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bank'
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
