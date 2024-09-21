
<template>
  <Icon :iconName="'ease-out-control-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseOutControlPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-out-control-point'
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
