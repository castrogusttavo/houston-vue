
<template>
  <Icon :iconName="'transition-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransitionRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transition-right'
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
