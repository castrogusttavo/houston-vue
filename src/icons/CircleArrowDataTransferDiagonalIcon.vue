
<template>
  <Icon :iconName="'circle-arrow-data-transfer-diagonal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDataTransferDiagonalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-data-transfer-diagonal'
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
