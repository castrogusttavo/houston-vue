
<template>
  <Icon :iconName="'calendar-check-in-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarCheckIn02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-check-in-02'
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
