
<template>
  <Icon :iconName="'bitcoin-cpu'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinCpuIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-cpu'
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
