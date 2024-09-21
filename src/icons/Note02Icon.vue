
<template>
  <Icon :iconName="'note-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Note02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-02'
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
