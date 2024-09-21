
<template>
  <Icon :iconName="'legal-document-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LegalDocument02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'legal-document-02'
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
