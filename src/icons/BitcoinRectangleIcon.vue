
<template>
  <Icon :iconName="'bitcoin-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-rectangle'
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
