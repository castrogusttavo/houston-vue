
<template>
  <Icon :iconName="'dashboard-speed-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSpeed01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-speed-01'
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
