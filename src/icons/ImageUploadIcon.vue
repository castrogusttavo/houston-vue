
<template>
  <Icon :iconName="'image-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-upload'
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
