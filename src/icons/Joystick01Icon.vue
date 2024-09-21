
<template>
  <Icon :iconName="'joystick-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Joystick01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'joystick-01'
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
