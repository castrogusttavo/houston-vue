
<template>
  <Icon :iconName="'checkmark-square-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkSquare03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-square-03'
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
