
<template>
  <Icon :iconName="'calendar-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-block-01'
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
