
<template>
  <Icon :iconName="'time-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Time02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-02'
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
