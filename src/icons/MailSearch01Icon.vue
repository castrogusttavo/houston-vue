
<template>
  <Icon :iconName="'mail-search-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSearch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-search-01'
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
