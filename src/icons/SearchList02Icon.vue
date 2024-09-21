
<template>
  <Icon :iconName="'search-list-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchList02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-list-02'
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
