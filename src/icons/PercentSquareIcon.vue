
<template>
  <Icon :iconName="'percent-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PercentSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'percent-square'
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
