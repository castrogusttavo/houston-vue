
<template>
  <Icon :iconName="'dice-faces-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-01'
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
