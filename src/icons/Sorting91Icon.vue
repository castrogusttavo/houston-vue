
<template>
  <Icon :iconName="'sorting-9-1'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sorting91Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-9-1'
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
