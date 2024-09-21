
<template>
  <Icon :iconName="'binary-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BinaryCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'binary-code'
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
