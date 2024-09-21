
<template>
  <Icon :iconName="'mobile-protection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MobileProtectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mobile-protection'
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
