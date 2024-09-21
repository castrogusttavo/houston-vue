
<template>
  <Icon :iconName="'message-upload-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageUpload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-upload-01'
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
