
<template>
  <Icon :iconName="'package-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-search'
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
