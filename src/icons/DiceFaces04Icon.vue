
<template>
  <Icon :iconName="'dice-faces-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceFaces04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice-faces-04'
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
