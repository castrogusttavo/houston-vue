
<template>
  <Icon :iconName="'move-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-right'
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
