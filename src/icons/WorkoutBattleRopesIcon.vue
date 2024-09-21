
<template>
  <Icon :iconName="'workout-battle-ropes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutBattleRopesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-battle-ropes'
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
