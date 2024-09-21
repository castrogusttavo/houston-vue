
<template>
  <Icon :iconName="'mail-secure-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSecure01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-secure-01'
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
