
<template>
  <Icon :iconName="'chart-column'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartColumnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-column'
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
