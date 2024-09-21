
<template>
  <Icon :iconName="'curvy-left-direction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurvyLeftDirectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curvy-left-direction'
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
