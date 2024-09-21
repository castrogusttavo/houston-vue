
<template>
  <Icon :iconName="'taco-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Taco01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'taco-01'
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
