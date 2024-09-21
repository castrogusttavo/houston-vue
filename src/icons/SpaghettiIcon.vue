
<template>
  <Icon :iconName="'spaghetti'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpaghettiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spaghetti'
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
