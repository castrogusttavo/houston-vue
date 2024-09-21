
<template>
  <Icon :iconName="'typescript-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Typescript02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'typescript-02'
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
