
<template>
  <Icon :iconName="'mail-search-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailSearch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-search-02'
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
