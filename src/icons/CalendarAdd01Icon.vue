
<template>
  <Icon :iconName="'calendar-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-add-01'
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
