
<template>
  <Icon :iconName="'move-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-left'
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
