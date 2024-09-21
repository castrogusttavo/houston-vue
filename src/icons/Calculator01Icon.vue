
<template>
  <Icon :iconName="'calculator-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calculator01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calculator-01'
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
