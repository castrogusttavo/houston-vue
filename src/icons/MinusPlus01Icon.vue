
<template>
  <Icon :iconName="'minus-plus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusPlus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-plus-01'
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
