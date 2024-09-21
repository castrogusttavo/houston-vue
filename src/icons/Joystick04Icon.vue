
<template>
  <Icon :iconName="'joystick-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Joystick04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'joystick-04'
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
