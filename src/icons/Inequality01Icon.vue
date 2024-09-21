
<template>
  <Icon :iconName="'inequality-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Inequality01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inequality-01'
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
