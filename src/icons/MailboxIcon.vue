
<template>
  <Icon :iconName="'mailbox'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailboxIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mailbox'
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
