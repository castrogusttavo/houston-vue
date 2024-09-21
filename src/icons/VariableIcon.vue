
<template>
  <Icon :iconName="'variable'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VariableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'variable'
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
