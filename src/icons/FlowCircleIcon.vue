
<template>
  <Icon :iconName="'flow-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlowCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flow-circle'
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
