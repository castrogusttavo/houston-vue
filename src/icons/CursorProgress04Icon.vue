
<template>
  <Icon :iconName="'cursor-progress-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorProgress04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-progress-04'
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
