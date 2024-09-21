
<template>
  <Icon :iconName="'dashboard-square-setting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashboardSquareSettingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashboard-square-setting'
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
