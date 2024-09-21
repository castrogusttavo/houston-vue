
<template>
  <Icon :iconName="'transition-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransitionBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transition-bottom'
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
