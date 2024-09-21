
<template>
  <Icon :iconName="'plus-minus-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinusSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus-square-01'
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
