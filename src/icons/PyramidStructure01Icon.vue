
<template>
  <Icon :iconName="'pyramid-structure-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PyramidStructure01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pyramid-structure-01'
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
