
<template>
  <Icon :iconName="'taco-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Taco02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'taco-02'
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
