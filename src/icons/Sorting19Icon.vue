
<template>
  <Icon :iconName="'sorting-1-9'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sorting19Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-1-9'
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
