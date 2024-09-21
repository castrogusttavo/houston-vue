
<template>
  <Icon :iconName="'discount-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Discount01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discount-01'
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
