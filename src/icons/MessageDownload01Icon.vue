
<template>
  <Icon :iconName="'message-download-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDownload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-download-01'
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
