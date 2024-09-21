
<template>
  <Icon :iconName="'triangle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Triangle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'triangle-01'
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
