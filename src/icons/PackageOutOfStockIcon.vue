
<template>
  <Icon :iconName="'package-out-of-stock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageOutOfStockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-out-of-stock'
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
