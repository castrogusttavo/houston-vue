
<template>
  <Icon :iconName="'dish-washer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DishWasherIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dish-washer'
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
