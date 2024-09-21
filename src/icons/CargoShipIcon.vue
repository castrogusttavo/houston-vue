
<template>
  <Icon :iconName="'cargo-ship'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CargoShipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cargo-ship'
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
