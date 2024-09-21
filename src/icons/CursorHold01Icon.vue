
<template>
  <Icon :iconName="'cursor-hold-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorHold01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-hold-01'
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
