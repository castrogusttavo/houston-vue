
<template>
  <Icon :iconName="'image-crop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageCropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-crop'
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
