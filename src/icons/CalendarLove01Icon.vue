
<template>
  <Icon :iconName="'calendar-love-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarLove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-love-01'
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
