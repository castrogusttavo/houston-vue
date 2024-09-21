
<template>
  <Icon :iconName="'curvy-left-right-direction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurvyLeftRightDirectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curvy-left-right-direction'
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
