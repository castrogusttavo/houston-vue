
<template>
  <Icon :iconName="'mail-at-sign-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailAtSign01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-at-sign-01'
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
