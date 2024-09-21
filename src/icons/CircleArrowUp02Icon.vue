
<template>
  <Icon :iconName="'circle-arrow-up-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowUp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-up-02'
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
