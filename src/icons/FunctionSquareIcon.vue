
<template>
  <Icon :iconName="'function-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FunctionSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'function-square'
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
