
<template>
  <Icon :iconName="'mail-validation-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailValidation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-validation-02'
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
