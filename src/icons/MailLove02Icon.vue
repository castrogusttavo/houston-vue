
<template>
  <Icon :iconName="'mail-love-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailLove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-love-02'
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
