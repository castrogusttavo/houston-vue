
<template>
  <Icon :iconName="'mining-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mining02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mining-02'
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
