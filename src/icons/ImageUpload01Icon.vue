
<template>
  <Icon :iconName="'image-upload-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageUpload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-upload-01'
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
