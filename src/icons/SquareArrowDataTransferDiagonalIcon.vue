
<template>
  <Icon :iconName="'square-arrow-data-transfer-diagonal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDataTransferDiagonalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-data-transfer-diagonal'
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
