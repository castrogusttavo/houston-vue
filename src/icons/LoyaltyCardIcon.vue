
<template>
  <Icon :iconName="'loyalty-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoyaltyCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loyalty-card'
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
