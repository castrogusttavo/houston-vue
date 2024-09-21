
<template>
  <Icon :iconName="'keyframes-multiple'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesMultipleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-multiple'
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
