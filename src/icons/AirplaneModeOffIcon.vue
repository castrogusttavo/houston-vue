
<template>
  <Icon :iconName="'airplane-mode-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneModeOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-mode-off'
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
