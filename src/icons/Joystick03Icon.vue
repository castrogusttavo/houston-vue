
<template>
  <Icon :iconName="'joystick-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Joystick03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'joystick-03'
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
