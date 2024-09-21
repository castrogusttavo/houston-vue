
<template>
  <Icon :iconName="'chart-bar-line'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartBarLineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-bar-line'
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
