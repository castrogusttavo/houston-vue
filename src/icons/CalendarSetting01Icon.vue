
<template>
  <Icon :iconName="'calendar-setting-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarSetting01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-setting-01'
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
