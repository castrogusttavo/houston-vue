
<template>
  <Icon :iconName="'plus-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus'
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
