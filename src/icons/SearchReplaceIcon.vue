
<template>
  <Icon :iconName="'search-replace'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchReplaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-replace'
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
