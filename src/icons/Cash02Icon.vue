
<template>
  <Icon :iconName="'cash-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cash02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cash-02'
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
