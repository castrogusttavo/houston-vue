
<template>
  <Icon :iconName="'message-search-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageSearch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-search-02'
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
