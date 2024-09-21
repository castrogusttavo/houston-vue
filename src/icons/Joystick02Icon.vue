
<template>
  <Icon :iconName="'joystick-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Joystick02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'joystick-02'
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
