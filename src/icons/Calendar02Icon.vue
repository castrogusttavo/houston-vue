
<template>
  <Icon :iconName="'calendar-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calendar02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-02'
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
