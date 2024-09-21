
<template>
  <Icon :iconName="'account-setting-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccountSetting02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'account-setting-02'
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
