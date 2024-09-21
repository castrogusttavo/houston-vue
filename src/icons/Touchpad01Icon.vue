
<template>
  <Icon :iconName="'touchpad-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touchpad01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touchpad-01'
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
