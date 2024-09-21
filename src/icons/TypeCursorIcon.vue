
<template>
  <Icon :iconName="'type-cursor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TypeCursorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'type-cursor'
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
