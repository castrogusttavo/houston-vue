
<template>
  <Icon :iconName="'ease-in-control-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseInControlPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-in-control-point'
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
