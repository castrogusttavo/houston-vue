
<template>
  <Icon :iconName="'mail-secure-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSecure02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-secure-02'
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
