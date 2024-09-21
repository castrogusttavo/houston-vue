
<template>
  <Icon :iconName="'layer-mask-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayerMask01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layer-mask-01'
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
