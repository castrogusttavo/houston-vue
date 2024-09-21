
<template>
  <Icon :iconName="'store-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-add-02'
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
