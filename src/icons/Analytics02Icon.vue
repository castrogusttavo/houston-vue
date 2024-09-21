
<template>
  <Icon :iconName="'analytics-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Analytics02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'analytics-02'
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
