
<template>
  <Icon :iconName="'dashboard-square-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSquareAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-square-add'
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
