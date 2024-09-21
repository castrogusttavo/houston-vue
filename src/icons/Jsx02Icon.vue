
<template>
  <Icon :iconName="'jsx-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Jsx02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jsx-02'
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
