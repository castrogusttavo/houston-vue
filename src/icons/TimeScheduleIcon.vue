
<template>
  <Icon :iconName="'time-schedule'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeScheduleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-schedule'
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
