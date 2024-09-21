
<template>
  <Icon :iconName="'cpu-charge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CpuChargeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cpu-charge'
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
