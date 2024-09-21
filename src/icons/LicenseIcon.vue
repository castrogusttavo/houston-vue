
<template>
  <Icon :iconName="'license'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicenseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license'
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
