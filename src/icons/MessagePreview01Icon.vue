
<template>
  <Icon :iconName="'message-preview-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessagePreview01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-preview-01'
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
