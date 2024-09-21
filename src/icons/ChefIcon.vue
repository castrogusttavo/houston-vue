
<template>
  <Icon :iconName="'chef'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChefIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chef'
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
