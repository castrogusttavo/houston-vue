
<template>
  <Icon :iconName="'calendar-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-add-02'
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
