
<template>
  <Icon :iconName="'bitcoin-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-ellipse'
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
