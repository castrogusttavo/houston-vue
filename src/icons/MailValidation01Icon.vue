
<template>
  <Icon :iconName="'mail-validation-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailValidation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-validation-01'
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
