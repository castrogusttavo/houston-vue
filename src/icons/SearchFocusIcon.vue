
<template>
  <Icon :iconName="'search-focus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchFocusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-focus'
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
