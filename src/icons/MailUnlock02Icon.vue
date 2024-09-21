
<template>
  <Icon :iconName="'mail-unlock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailUnlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-unlock-02'
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
