
<template>
  <Icon :iconName="'chef-hat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChefHatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chef-hat'
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
