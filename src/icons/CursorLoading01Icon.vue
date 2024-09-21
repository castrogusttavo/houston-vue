
<template>
  <Icon :iconName="'cursor-loading-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorLoading01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-loading-01'
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
