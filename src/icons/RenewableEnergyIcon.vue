
<template>
  <Icon :iconName="'renewable-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RenewableEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'renewable-energy'
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
