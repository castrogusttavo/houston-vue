
<template>
  <Icon :iconName="'touchpad-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touchpad04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touchpad-04'
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
