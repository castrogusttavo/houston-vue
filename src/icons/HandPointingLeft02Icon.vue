
<template>
  <Icon :iconName="'hand-pointing-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-left-02'
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
