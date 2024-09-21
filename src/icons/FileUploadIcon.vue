
<template>
  <Icon :iconName="'file-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-upload'
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
