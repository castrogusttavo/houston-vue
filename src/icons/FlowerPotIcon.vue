
<template>
  <Icon :iconName="'flower-pot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlowerPotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flower-pot'
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
