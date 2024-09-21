
<template>
  <Icon :iconName="'approximately-equal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApproximatelyEqualIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'approximately-equal'
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
