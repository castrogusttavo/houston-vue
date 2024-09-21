
<template>
  <Icon :iconName="'circle-arrow-diagonal-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDiagonal01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-diagonal-01'
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
