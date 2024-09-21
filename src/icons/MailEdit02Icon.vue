
<template>
  <Icon :iconName="'mail-edit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailEdit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-edit-02'
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
