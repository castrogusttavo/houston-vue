
<template>
  <Icon :iconName="'x-variable-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'XVariableSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'x-variable-square'
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
