
<template>
  <Icon :iconName="'square-lock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-01'
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
