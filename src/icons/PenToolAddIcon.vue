
<template>
  <Icon :iconName="'pen-tool-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenToolAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-tool-add'
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
