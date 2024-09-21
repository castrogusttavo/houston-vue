
<template>
  <Icon :iconName="'sticky-note-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StickyNote02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sticky-note-02'
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
