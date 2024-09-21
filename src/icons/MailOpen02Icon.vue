
<template>
  <Icon :iconName="'mail-open-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailOpen02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-open-02'
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
