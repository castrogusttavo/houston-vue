
<template>
  <Icon :iconName="'file-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-validation'
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
