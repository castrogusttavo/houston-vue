
<template>
  <Icon :iconName="'mail-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-lock-02'
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
