
<template>
  <Icon :iconName="'qq-plot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QqPlotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'qq-plot'
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
