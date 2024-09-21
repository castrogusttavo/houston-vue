
<template>
  <Icon :iconName="'rotate-top-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateTopLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-top-left'
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
