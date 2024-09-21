
<template>
  <Icon :iconName="'spirals'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpiralsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spirals'
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
