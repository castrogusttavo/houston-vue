
<template>
  <Icon :iconName="'yoga-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Yoga02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yoga-02'
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
