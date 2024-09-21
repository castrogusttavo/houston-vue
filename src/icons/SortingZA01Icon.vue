
<template>
  <Icon :iconName="'sorting-z-a-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortingZA01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-z-a-01'
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
