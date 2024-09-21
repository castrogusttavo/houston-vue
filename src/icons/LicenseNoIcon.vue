
<template>
  <Icon :iconName="'license-no'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicenseNoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license-no'
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
