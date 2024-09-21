
<template>
  <Icon :iconName="'pen-tool-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenTool01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-tool-01'
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
