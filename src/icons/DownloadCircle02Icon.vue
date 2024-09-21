
<template>
  <Icon :iconName="'download-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DownloadCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-circle-02'
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
