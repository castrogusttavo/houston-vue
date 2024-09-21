
<template>
  <Icon :iconName="'mail-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-minus-01'
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
