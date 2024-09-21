
<template>
  <Icon :iconName="'approximately-equal-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApproximatelyEqualCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'approximately-equal-circle'
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
