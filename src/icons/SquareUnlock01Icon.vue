
<template>
  <Icon :iconName="'square-unlock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareUnlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-unlock-01'
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
