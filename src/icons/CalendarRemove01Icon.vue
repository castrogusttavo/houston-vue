
<template>
  <Icon :iconName="'calendar-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-remove-01'
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
