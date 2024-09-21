
<template>
  <Icon :iconName="'rhombus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RhombusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rhombus'
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
