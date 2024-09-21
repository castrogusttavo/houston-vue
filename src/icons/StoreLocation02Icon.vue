
<template>
  <Icon :iconName="'store-location-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreLocation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-location-02'
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
