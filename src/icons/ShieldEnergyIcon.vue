
<template>
  <Icon :iconName="'shield-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShieldEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-energy'
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
