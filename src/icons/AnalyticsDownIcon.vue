
<template>
  <Icon :iconName="'analytics-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AnalyticsDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'analytics-down'
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
