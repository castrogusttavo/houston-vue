
<template>
  <Icon :iconName="'user-search-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSearch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-search-01'
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
