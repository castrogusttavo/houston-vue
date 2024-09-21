
<template>
  <Icon :iconName="'plus-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus-01'
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
