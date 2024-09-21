
<template>
  <Icon :iconName="'circle-arrow-data-transfer-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDataTransferHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-data-transfer-horizontal'
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
