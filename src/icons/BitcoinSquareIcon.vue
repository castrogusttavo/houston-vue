
<template>
  <Icon :iconName="'bitcoin-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-square'
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
