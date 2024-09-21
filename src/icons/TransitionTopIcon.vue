
<template>
  <Icon :iconName="'transition-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransitionTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transition-top'
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
