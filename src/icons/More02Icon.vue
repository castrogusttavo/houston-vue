
<template>
  <Icon :iconName="'more-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'More02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-02'
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
