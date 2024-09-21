
<template>
  <Icon :iconName="'inequality-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InequalityCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inequality-circle-01'
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
