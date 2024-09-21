
<template>
  <Icon :iconName="'mail-download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailDownload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-download-02'
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
