
<template>
  <Icon :iconName="'circle-arrow-data-transfer-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDataTransferVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-data-transfer-vertical'
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
