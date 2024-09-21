
<template>
  <Icon :iconName="'mail-receive-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailReceive01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-receive-01'
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
