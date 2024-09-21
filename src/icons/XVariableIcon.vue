
<template>
  <Icon :iconName="'x-variable'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'XVariableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'x-variable'
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
