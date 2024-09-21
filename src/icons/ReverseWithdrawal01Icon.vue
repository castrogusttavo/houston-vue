
<template>
  <Icon :iconName="'reverse-withdrawal-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReverseWithdrawal01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reverse-withdrawal-01'
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
