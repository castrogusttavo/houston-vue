
<template>
  <Icon :iconName="'curvy-right-direction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurvyRightDirectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curvy-right-direction'
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
