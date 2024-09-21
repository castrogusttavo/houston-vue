
<template>
  <Icon :iconName="'workout-sport'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutSportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-sport'
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
