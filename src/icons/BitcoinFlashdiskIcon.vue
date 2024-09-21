
<template>
  <Icon :iconName="'bitcoin-flashdisk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinFlashdiskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-flashdisk'
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
