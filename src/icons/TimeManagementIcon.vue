
<template>
  <Icon :iconName="'time-management'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeManagementIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-management'
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
