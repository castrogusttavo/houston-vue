
<template>
  <Icon :iconName="'hand-pointing-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-right-02'
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
