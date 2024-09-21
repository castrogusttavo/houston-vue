
<template>
  <Icon :iconName="'popcorn'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PopcornIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'popcorn'
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
