
<template>
  <Icon :iconName="'file-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-download'
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
