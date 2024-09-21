
<template>
  <Icon :iconName="'city-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'City02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'city-02'
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
