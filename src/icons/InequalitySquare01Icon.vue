
<template>
  <Icon :iconName="'inequality-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InequalitySquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inequality-square-01'
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
