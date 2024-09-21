
<template>
  <Icon :iconName="'arrow-down-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDownRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-right-02'
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
