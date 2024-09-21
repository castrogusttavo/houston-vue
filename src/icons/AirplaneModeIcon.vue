
<template>
  <Icon :iconName="'airplane-mode'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneModeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-mode'
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
