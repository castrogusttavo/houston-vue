
<template>
  <Icon :iconName="'safe-delivery-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SafeDelivery02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'safe-delivery-02'
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
