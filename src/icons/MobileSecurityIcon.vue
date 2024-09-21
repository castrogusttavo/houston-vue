
<template>
  <Icon :iconName="'mobile-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MobileSecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mobile-security'
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
