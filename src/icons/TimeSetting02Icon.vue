
<template>
  <Icon :iconName="'time-setting-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeSetting02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-setting-02'
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
