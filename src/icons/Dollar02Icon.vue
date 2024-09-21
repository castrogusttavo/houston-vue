
<template>
  <Icon :iconName="'dollar-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dollar02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-02'
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
