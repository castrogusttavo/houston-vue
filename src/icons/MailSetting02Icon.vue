
<template>
  <Icon :iconName="'mail-setting-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSetting02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-setting-02'
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
