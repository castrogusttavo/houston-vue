
<template>
  <Icon :iconName="'account-setting-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccountSetting03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'account-setting-03'
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
