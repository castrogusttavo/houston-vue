
<template>
  <Icon :iconName="'arrow-data-transfer-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDataTransferHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-data-transfer-horizontal'
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
