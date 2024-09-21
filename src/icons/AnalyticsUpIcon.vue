
<template>
  <Icon :iconName="'analytics-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AnalyticsUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'analytics-up'
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
