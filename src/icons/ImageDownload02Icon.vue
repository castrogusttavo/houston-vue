
<template>
  <Icon :iconName="'image-download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageDownload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-download-02'
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
