
<template>
  <Icon :iconName="'sorting-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortingUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-up'
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
