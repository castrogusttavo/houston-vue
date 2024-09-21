
<template>
  <Icon :iconName="'basketball-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Basketball02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'basketball-02'
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
