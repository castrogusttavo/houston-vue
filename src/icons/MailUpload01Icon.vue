
<template>
  <Icon :iconName="'mail-upload-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailUpload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-upload-01'
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
