
<template>
  <Icon :iconName="'mail-setting-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSetting01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-setting-01'
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
