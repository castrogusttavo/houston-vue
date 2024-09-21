
<template>
  <Icon :iconName="'mailbox-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mailbox01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mailbox-01'
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
