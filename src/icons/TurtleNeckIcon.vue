
<template>
  <Icon :iconName="'turtle-neck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TurtleNeckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'turtle-neck'
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
