
<template>
  <Icon :iconName="'soft-drink-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoftDrink01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soft-drink-01'
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
