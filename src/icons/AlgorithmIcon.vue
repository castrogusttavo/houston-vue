
<template>
  <Icon :iconName="'algorithm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlgorithmIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'algorithm'
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
