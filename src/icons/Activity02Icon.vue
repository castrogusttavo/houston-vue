
<template>
  <Icon :iconName="'activity-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Activity02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'activity-02'
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
