
<template>
  <Icon :iconName="'arrow-data-transfer-diagonal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDataTransferDiagonalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-data-transfer-diagonal'
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
