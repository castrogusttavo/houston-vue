
<template>
  <Icon :iconName="'mail-send-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSend02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-send-02'
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
