
<template>
  <Icon :iconName="'radio-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Radio02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radio-02'
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
