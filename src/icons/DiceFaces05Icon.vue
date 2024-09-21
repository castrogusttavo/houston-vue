
<template>
  <Icon :iconName="'dice-faces-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-05'
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
