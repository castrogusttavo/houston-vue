
<template>
  <Icon :iconName="'mail-unlock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailUnlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-unlock-01'
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
