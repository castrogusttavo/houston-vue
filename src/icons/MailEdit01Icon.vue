
<template>
  <Icon :iconName="'mail-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-edit-01'
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
