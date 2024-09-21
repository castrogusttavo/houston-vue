
<template>
  <Icon :iconName="'transition-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransitionLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transition-left'
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
