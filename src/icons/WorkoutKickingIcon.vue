
<template>
  <Icon :iconName="'workout-kicking'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutKickingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-kicking'
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
