
<template>
  <Icon :iconName="'pizza-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pizza02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pizza-02'
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
