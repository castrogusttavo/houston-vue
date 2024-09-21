
<template>
  <Icon :iconName="'route-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Route02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'route-02'
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
