
<template>
  <Icon :iconName="'cursor-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cursor01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-01'
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
