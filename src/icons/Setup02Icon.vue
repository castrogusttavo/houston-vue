
<template>
  <Icon :iconName="'setup-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Setup02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setup-02'
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
