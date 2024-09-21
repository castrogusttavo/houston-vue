
<template>
  <Icon :iconName="'target-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TargetDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'target-dollar'
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
