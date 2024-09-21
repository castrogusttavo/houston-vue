
<template>
  <Icon :iconName="'chart-medium'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartMediumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-medium'
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
