
<template>
  <Icon :iconName="'store-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-remove-02'
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
