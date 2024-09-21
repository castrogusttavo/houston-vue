
<template>
  <Icon :iconName="'square-arrow-data-transfer-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDataTransferHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-data-transfer-horizontal'
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
