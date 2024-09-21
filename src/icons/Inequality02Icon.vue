
<template>
  <Icon :iconName="'inequality-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Inequality02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inequality-02'
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
