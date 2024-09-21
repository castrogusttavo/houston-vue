
<template>
  <Icon :iconName="'gas-stove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GasStoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gas-stove'
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
