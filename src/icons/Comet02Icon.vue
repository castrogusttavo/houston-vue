
<template>
  <Icon :iconName="'comet-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Comet02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comet-02'
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
