
<template>
  <Icon :iconName="'workout-warm-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutWarmUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-warm-up'
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
