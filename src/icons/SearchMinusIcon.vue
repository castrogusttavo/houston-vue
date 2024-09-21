
<template>
  <Icon :iconName="'search-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-minus'
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
