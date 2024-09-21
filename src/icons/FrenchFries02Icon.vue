
<template>
  <Icon :iconName="'french-fries-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FrenchFries02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'french-fries-02'
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
