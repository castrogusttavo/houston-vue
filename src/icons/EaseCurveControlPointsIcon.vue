
<template>
  <Icon :iconName="'ease-curve-control-points'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseCurveControlPointsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-curve-control-points'
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
