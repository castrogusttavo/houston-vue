
<template>
  <Icon :iconName="'dashboard-circle-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardCircleEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-circle-edit'
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
