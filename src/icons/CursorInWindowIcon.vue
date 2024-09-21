
<template>
  <Icon :iconName="'cursor-in-window'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorInWindowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-in-window'
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
