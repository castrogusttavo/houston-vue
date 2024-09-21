
<template>
  <Icon :iconName="'mail-lock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailLock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-lock-01'
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
