
<template>
  <Icon :iconName="'bread-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bread02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bread-02'
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
