
<template>
  <Icon :iconName="'calendar-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-lock-02'
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
