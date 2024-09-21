
<template>
  <Icon :iconName="'mail-receive-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailReceive02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-receive-02'
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
