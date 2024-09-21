
<template>
  <Icon :iconName="'plug-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plug02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plug-02'
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
