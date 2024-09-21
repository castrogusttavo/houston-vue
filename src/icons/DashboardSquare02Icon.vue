
<template>
  <Icon :iconName="'dashboard-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-square-02'
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
