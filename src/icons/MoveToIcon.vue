
<template>
  <Icon :iconName="'move-to'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveToIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-to'
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
