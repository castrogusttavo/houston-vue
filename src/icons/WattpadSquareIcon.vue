
<template>
  <Icon :iconName="'wattpad-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WattpadSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wattpad-square'
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
