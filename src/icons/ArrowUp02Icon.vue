
<template>
  <Icon :iconName="'arrow-up-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-02'
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
