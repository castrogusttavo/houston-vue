
<template>
  <Icon :iconName="'wifi-error-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiError02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-error-02'
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
