
<template>
  <Icon :iconName="'calendar-download-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarDownload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-download-01'
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
