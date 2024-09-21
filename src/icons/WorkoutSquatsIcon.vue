
<template>
  <Icon :iconName="'workout-squats'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutSquatsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-squats'
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
