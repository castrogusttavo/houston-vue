
<template>
  <Icon :iconName="'mail-reply-all-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailReplyAll02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-reply-all-02'
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
