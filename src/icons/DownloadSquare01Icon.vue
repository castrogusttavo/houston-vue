
<template>
  <Icon :iconName="'download-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DownloadSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-square-01'
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
