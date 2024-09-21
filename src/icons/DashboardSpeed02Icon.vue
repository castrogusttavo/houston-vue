
<template>
  <Icon :iconName="'dashboard-speed-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSpeed02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-speed-02'
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
