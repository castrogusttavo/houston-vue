
<template>
  <Icon :iconName="'pendulum'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PendulumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pendulum'
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
