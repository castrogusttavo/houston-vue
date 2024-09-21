
<template>
  <Icon :iconName="'mail-account-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailAccount01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-account-01'
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
