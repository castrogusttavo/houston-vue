
<template>
  <Icon :iconName="'distribute-vertical-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeVerticalCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-vertical-center'
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
