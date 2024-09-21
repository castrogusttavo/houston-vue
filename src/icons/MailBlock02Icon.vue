
<template>
  <Icon :iconName="'mail-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-block-02'
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
