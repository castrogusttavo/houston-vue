
<template>
  <Icon :iconName="'pen-tool-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenToolMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-tool-minus'
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
