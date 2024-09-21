
<template>
  <Icon :iconName="'arrow-down-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDown02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-02'
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
