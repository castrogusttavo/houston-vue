
<template>
  <Icon :iconName="'basketball-hoop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BasketballHoopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'basketball-hoop'
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
