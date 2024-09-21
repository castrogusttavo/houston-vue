
<template>
  <Icon :iconName="'dashboard-circle-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardCircleRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-circle-remove'
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
