
<template>
  <Icon :iconName="'vegetarian-food'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VegetarianFoodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vegetarian-food'
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
