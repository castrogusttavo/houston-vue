
<template>
  <Icon :iconName="'distribute-vertical-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeVerticalTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-vertical-top'
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
