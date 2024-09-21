
<template>
  <Icon :iconName="'move-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-bottom'
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
