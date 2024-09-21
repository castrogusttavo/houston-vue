
<template>
  <Icon :iconName="'rocket-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Rocket02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rocket-02'
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
