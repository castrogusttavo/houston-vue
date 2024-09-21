
<template>
  <Icon :iconName="'calendar-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-remove-02'
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
