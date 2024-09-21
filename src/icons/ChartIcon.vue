
<template>
  <Icon :iconName="'chart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart'
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
