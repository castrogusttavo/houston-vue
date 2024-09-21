
<template>
  <Icon :iconName="'calendar-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-minus-02'
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
