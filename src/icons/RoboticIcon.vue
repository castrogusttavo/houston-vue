
<template>
  <Icon :iconName="'robotic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RoboticIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'robotic'
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
