
<template>
  <Icon :iconName="'search-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-circle'
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
