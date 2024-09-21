
<template>
  <Icon :iconName="'store-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Store02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-02'
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
