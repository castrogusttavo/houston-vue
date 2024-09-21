
<template>
  <Icon :iconName="'laptop-settings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopSettingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-settings'
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
