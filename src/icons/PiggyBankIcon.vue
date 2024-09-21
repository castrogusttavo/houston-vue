
<template>
  <Icon :iconName="'piggy-bank'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PiggyBankIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'piggy-bank'
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
