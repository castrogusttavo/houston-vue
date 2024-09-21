
<template>
  <Icon :iconName="'dumbbell-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dumbbell01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dumbbell-01'
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
