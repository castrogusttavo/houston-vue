
<template>
  <Icon :iconName="'structure-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StructureCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-check'
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
