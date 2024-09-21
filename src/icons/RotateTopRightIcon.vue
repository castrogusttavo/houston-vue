
<template>
  <Icon :iconName="'rotate-top-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateTopRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-top-right'
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
