
<template>
  <Icon :iconName="'x-variable-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'XVariableCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'x-variable-circle'
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
