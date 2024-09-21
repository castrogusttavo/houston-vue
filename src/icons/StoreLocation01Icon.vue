
<template>
  <Icon :iconName="'store-location-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreLocation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-location-01'
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
