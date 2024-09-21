
<template>
  <Icon :iconName="'toggle-on'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ToggleOnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'toggle-on'
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
