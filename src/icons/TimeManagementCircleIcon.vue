
<template>
  <Icon :iconName="'time-management-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeManagementCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-management-circle'
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
