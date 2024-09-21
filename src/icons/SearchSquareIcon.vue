
<template>
  <Icon :iconName="'search-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-square'
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
