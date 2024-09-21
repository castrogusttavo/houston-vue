
<template>
  <Icon :iconName="'basketball-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Basketball01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'basketball-01'
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
