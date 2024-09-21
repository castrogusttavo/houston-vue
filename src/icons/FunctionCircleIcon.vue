
<template>
  <Icon :iconName="'function-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FunctionCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'function-circle'
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
