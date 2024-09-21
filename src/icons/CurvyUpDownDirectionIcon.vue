
<template>
  <Icon :iconName="'curvy-up-down-direction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurvyUpDownDirectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curvy-up-down-direction'
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
