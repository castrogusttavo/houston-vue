
<template>
  <Icon :iconName="'calculator'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalculatorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calculator'
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
