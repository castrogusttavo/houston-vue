
<template>
  <Icon :iconName="'square-arrow-data-transfer-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDataTransferVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-data-transfer-vertical'
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
