
<template>
  <Icon :iconName="'store-verified-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreVerified02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-verified-02'
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
