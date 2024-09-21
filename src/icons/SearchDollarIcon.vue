
<template>
  <Icon :iconName="'search-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-dollar'
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
