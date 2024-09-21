
<template>
  <Icon :iconName="'arrow-move-left-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveLeftDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-left-down'
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
