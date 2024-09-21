
<template>
  <Icon :iconName="'heading-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Heading02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading-02'
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
