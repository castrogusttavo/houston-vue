
<template>
  <Icon :iconName="'structure-fail'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StructureFailIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-fail'
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
