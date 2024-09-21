
<template>
  <Icon :iconName="'calendar-upload-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarUpload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-upload-02'
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
