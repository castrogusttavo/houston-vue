
<template>
  <Icon :iconName="'calendar-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-minus-01'
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
