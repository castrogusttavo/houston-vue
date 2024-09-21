
<template>
  <Icon :iconName="'calendar-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-block-02'
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
