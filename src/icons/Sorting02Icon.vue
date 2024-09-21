
<template>
  <Icon :iconName="'sorting-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sorting02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-02'
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
