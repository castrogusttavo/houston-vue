
<template>
  <Icon :iconName="'sorting-a-z-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortingAZ02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-a-z-02'
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
