
<template>
  <Icon :iconName="'radial'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RadialIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radial'
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
