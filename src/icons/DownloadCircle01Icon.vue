
<template>
  <Icon :iconName="'download-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DownloadCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-circle-01'
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
