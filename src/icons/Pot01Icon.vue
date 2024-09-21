
<template>
  <Icon :iconName="'pot-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pot01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pot-01'
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
