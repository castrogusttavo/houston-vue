
<template>
  <Icon :iconName="'organic-food'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OrganicFoodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'organic-food'
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
