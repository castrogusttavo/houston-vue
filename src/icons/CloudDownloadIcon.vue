
<template>
  <Icon :iconName="'cloud-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-download'
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
