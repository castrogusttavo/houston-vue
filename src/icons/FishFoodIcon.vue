
<template>
  <Icon :iconName="'fish-food'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FishFoodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fish-food'
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
