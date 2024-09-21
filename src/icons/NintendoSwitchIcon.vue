
<template>
  <Icon :iconName="'nintendo-switch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NintendoSwitchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nintendo-switch'
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
