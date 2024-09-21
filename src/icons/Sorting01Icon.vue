
<template>
  <Icon :iconName="'sorting-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sorting01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-01'
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
