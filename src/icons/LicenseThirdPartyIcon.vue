
<template>
  <Icon :iconName="'license-third-party'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicenseThirdPartyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license-third-party'
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
