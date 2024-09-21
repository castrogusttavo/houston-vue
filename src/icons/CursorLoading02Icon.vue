
<template>
  <Icon :iconName="'cursor-loading-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorLoading02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-loading-02'
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
