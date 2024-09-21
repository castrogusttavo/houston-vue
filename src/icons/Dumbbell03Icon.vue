
<template>
  <Icon :iconName="'dumbbell-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dumbbell03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dumbbell-03'
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
