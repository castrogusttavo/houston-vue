
<template>
  <Icon :iconName="'download-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DownloadSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-square-02'
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
