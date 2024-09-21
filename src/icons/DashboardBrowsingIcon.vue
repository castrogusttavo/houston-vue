
<template>
  <Icon :iconName="'dashboard-browsing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardBrowsingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-browsing'
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
