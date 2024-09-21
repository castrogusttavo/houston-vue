
<template>
  <Icon :iconName="'license-draft'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicenseDraftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license-draft'
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
