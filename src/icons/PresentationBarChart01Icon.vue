
<template>
  <Icon :iconName="'presentation-bar-chart-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PresentationBarChart01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-bar-chart-01'
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
