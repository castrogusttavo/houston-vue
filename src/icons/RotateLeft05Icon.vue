
<template>
  <Icon :iconName="'rotate-left-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateLeft05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-left-05'
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
