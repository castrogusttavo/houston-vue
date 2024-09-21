
<template>
  <Icon :iconName="'truck-return'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TruckReturnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'truck-return'
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
