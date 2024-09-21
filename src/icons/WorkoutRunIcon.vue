
<template>
  <Icon :iconName="'workout-run'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutRunIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-run'
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
