
<template>
  <Icon :iconName="'mail-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-add-01'
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
