
<template>
  <Icon :iconName="'distribute-horizontal-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeHorizontalLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-horizontal-left'
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
