
<template>
  <Icon :iconName="'search-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'search-remove'
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
