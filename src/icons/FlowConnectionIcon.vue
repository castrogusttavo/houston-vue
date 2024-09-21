
<template>
  <Icon :iconName="'flow-connection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlowConnectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flow-connection'
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
