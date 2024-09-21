
<template>
  <Icon :iconName="'calendar-download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarDownload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-download-02'
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
