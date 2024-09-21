
<template>
  <Icon :iconName="'pyramid-structure-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PyramidStructure02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pyramid-structure-02'
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
