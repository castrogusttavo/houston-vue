
<template>
  <Icon :iconName="'maximize-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Maximize02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maximize-02'
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
