
<template>
  <Icon :iconName="'node-move-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NodeMoveUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'node-move-up'
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
