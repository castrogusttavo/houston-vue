
<template>
  <Icon :iconName="'pot-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pot02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pot-02'
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
