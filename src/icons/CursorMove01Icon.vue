
<template>
  <Icon :iconName="'cursor-move-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorMove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-move-01'
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
