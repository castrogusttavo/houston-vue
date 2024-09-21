
<template>
  <Icon :iconName="'rotate-left-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateLeft04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-left-04'
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
