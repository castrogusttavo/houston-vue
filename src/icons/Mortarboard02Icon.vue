
<template>
  <Icon :iconName="'mortarboard-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mortarboard02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mortarboard-02'
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
