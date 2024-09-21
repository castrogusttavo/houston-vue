
<template>
  <Icon :iconName="'dashboard-square-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSquareRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-square-remove'
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
