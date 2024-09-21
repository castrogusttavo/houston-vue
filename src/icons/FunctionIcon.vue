
<template>
  <Icon :iconName="'function'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FunctionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'function'
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
