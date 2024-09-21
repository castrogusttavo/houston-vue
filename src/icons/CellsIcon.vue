
<template>
  <Icon :iconName="'cells'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CellsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cells'
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
