
<template>
  <Icon :iconName="'mail-at-sign-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailAtSign02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-at-sign-02'
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
