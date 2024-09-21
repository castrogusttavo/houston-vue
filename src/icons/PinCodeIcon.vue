
<template>
  <Icon :iconName="'pin-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pin-code'
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
