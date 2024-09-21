
<template>
  <Icon :iconName="'bitcoin-graph'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinGraphIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-graph'
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
