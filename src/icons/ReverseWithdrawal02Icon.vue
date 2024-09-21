
<template>
  <Icon :iconName="'reverse-withdrawal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReverseWithdrawal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reverse-withdrawal-02'
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
