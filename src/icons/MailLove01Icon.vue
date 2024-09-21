
<template>
  <Icon :iconName="'mail-love-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailLove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-love-01'
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
