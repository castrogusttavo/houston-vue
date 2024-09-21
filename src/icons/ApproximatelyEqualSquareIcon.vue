
<template>
  <Icon :iconName="'approximately-equal-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApproximatelyEqualSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'approximately-equal-square'
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
