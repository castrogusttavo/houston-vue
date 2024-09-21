
<template>
  <Icon :iconName="'dish-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dish01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dish-01'
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
