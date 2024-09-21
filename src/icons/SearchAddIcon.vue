
<template>
  <Icon :iconName="'search-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-add'
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
