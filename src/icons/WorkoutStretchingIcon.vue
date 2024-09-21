
<template>
  <Icon :iconName="'workout-stretching'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutStretchingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-stretching'
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
