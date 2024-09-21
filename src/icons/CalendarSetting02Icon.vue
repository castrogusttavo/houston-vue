
<template>
  <Icon :iconName="'calendar-setting-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarSetting02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-setting-02'
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
