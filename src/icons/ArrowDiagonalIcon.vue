
<template>
  <Icon :iconName="'arrow-diagonal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDiagonalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-diagonal'
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
