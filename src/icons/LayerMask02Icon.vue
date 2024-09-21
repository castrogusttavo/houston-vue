
<template>
  <Icon :iconName="'layer-mask-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayerMask02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layer-mask-02'
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
