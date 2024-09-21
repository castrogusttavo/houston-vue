
<template>
  <Icon :iconName="'workout-gymnastics'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkoutGymnasticsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workout-gymnastics'
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
