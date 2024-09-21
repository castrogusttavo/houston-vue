
<template>
  <Icon :iconName="'paypal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaypalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paypal'
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
