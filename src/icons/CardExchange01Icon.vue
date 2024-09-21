
<template>
  <Icon :iconName="'card-exchange-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CardExchange01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'card-exchange-01'
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
