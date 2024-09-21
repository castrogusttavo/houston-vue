
<template>
  <Icon :iconName="'node-move-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NodeMoveDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'node-move-down'
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
