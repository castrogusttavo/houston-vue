
<template>
  <Icon :iconName="'doughnut'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DoughnutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doughnut'
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
