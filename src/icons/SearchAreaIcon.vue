
<template>
  <Icon :iconName="'search-area'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchAreaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-area'
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
