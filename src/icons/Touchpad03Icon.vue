
<template>
  <Icon :iconName="'touchpad-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touchpad03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touchpad-03'
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
