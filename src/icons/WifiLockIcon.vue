
<template>
  <Icon :iconName="'wifi-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-lock'
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
