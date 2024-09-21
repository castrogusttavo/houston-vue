
<template>
  <Icon :iconName="'chart-rose'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartRoseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-rose'
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
