
<template>
  <Icon :iconName="'global-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobalSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'global-search'
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
