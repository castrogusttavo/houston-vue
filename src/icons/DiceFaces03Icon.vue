
<template>
  <Icon :iconName="'dice-faces-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-03'
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
