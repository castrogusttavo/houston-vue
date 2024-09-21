
<template>
  <Icon :iconName="'rotate-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-left-03'
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
