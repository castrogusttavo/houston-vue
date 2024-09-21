
<template>
  <Icon :iconName="'train-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Train01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'train-01'
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
