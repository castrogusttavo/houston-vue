
<template>
  <Icon :iconName="'document-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DocumentValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'document-validation'
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
