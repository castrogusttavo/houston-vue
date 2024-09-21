
<template>
  <Icon :iconName="'sofa-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sofa02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sofa-02'
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
