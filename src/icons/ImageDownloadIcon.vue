
<template>
  <Icon :iconName="'image-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-download'
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
