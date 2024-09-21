
<template>
  <Icon :iconName="'message-download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDownload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-download-02'
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
