
<template>
  <Icon :iconName="'spoon-and-fork'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpoonAndForkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spoon-and-fork'
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
