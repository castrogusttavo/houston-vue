
<template>
  <Icon :iconName="'mail-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-block-01'
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
