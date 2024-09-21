
<template>
  <Icon :iconName="'qr-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QrCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'qr-code'
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
