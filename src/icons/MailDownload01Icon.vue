
<template>
  <Icon :iconName="'mail-download-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailDownload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-download-01'
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
