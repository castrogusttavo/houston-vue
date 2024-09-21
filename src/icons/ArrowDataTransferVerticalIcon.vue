
<template>
  <Icon :iconName="'arrow-data-transfer-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDataTransferVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-data-transfer-vertical'
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
