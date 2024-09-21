
<template>
  <Icon :iconName="'bitcoin-tag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinTagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-tag'
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
