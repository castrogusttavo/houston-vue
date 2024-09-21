
<template>
  <Icon :iconName="'mail-reply-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailReply01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-reply-01'
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
