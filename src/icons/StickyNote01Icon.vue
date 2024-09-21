
<template>
  <Icon :iconName="'sticky-note-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StickyNote01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sticky-note-01'
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
