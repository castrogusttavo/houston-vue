
<template>
  <Icon :iconName="'toggle-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ToggleOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'toggle-off'
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
