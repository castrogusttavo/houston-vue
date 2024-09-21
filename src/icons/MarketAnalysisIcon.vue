
<template>
  <Icon :iconName="'market-analysis'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MarketAnalysisIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'market-analysis'
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
