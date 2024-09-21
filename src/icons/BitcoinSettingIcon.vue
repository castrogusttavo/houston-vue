
<template>
  <Icon :iconName="'bitcoin-setting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSettingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-setting'
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
