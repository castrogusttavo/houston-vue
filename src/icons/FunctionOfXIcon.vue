
<template>
  <Icon :iconName="'function-of-x'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FunctionOfXIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'function-of-x'
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
