
<template>
  <Icon :iconName="'search-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Search01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-01'
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
