
<template>
  <Icon :iconName="'dashboard-circle-settings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardCircleSettingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-circle-settings'
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
