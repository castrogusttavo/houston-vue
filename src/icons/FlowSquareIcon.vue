
<template>
  <Icon :iconName="'flow-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlowSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flow-square'
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
