
<template>
  <Icon :iconName="'distribute-horizontal-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeHorizontalRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-horizontal-right'
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
