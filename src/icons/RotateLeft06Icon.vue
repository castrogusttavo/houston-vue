
<template>
  <Icon :iconName="'rotate-left-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateLeft06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-left-06'
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
