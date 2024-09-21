
<template>
  <Icon :iconName="'legal-document-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LegalDocument01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'legal-document-01'
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
