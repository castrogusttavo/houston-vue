
<template>
  <Icon :iconName="'safe-delivery-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SafeDelivery01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'safe-delivery-01'
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
