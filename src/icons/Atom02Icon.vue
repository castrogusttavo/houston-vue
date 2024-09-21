
<template>
  <Icon :iconName="'atom-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Atom02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'atom-02'
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
