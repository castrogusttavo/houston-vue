
<template>
  <Icon :iconName="'gas-pipe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GasPipeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gas-pipe'
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
