
<template>
  <Icon :iconName="'cursor-progress-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorProgress03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-progress-03'
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
