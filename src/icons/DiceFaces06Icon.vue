
<template>
  <Icon :iconName="'dice-faces-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-06'
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
