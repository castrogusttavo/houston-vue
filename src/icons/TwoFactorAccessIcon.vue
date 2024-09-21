
<template>
  <Icon :iconName="'two-factor-access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwoFactorAccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'two-factor-access'
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
