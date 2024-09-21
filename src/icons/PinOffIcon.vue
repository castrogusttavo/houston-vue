
<template>
  <Icon :iconName="'pin-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pin-off'
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
