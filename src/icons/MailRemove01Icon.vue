
<template>
  <Icon :iconName="'mail-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-remove-01'
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
