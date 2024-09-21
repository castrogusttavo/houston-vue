
<template>
  <Icon :iconName="'spoon-and-knife'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpoonAndKnifeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spoon-and-knife'
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
