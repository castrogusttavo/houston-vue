
<template>
  <Icon :iconName="'calendar-check-out-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarCheckOut02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-check-out-02'
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
