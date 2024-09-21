
<template>
  <Icon :iconName="'chart-evaluation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartEvaluationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-evaluation'
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
