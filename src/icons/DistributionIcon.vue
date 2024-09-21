
<template>
  <Icon :iconName="'distribution'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribution'
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
