
<template>
  <Icon :iconName="'kitchen-utensils'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KitchenUtensilsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kitchen-utensils'
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
