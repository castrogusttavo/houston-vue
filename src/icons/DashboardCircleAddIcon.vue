
<template>
  <Icon :iconName="'dashboard-circle-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardCircleAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-circle-add'
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
