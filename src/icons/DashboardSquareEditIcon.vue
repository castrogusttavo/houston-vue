
<template>
  <Icon :iconName="'dashboard-square-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSquareEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-square-edit'
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
