
<template>
  <Icon :iconName="'dashboard-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-circle'
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
