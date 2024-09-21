
<template>
  <Icon :iconName="'search-visual'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchVisualIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-visual'
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
