
<template>
  <Icon :iconName="'credit-card-pos'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardPosIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-pos'
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
