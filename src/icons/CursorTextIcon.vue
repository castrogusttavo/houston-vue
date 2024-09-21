
<template>
  <Icon :iconName="'cursor-text'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorTextIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-text'
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
