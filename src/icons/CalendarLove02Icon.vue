
<template>
  <Icon :iconName="'calendar-love-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarLove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-love-02'
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
