
<template>
  <Icon :iconName="'wifi-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wifi02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-02'
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
