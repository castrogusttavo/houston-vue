
<template>
  <Icon :iconName="'alarm-clock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlarmClockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alarm-clock'
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
