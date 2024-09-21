
<template>
  <Icon :iconName="'setup-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Setup01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setup-01'
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
