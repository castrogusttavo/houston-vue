
<template>
  <Icon :iconName="'bar-code-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BarCode01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bar-code-01'
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
