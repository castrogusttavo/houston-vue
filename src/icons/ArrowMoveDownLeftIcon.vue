
<template>
  <Icon :iconName="'arrow-move-down-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveDownLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-down-left'
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
