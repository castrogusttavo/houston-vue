
<template>
  <Icon :iconName="'presentation-line-chart-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PresentationLineChart01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-line-chart-01'
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
