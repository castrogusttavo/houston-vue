
<template>
  <Icon :iconName="'qr-code-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QrCode01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'qr-code-01'
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
