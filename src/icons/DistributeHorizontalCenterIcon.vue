
<template>
  <Icon :iconName="'distribute-horizontal-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeHorizontalCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-horizontal-center'
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
