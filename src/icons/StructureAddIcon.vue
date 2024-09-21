
<template>
  <Icon :iconName="'structure-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StructureAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-add'
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
