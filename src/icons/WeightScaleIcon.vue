
<template>
  <Icon :iconName="'weight-scale'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WeightScaleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'weight-scale'
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
