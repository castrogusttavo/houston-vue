
<template>
  <Icon :iconName="'natural-food'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NaturalFoodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'natural-food'
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
