
<template>
  <Icon :iconName="'blockchain-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Blockchain01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blockchain-01'
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
