
<template>
  <Icon :iconName="'doc-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Doc02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doc-02'
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
