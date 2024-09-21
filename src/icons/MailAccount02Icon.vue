
<template>
  <Icon :iconName="'mail-account-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailAccount02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-account-02'
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
