
<template>
  <Icon :iconName="'wifi-unlock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiUnlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-unlock'
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
