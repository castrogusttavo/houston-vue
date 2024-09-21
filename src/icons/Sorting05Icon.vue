
<template>
  <Icon :iconName="'sorting-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sorting05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-05'
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
