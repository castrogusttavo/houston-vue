
<template>
  <Icon :iconName="'store-verified-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreVerified01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-verified-01'
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
