
<template>
  <Icon :iconName="'account-setting-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccountSetting01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'account-setting-01'
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
