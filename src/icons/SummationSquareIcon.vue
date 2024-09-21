
<template>
  <Icon :iconName="'summation-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SummationSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'summation-square'
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
