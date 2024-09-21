
<template>
  <Icon :iconName="'legal-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Legal01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'legal-01'
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
