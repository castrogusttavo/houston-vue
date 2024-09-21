
<template>
  <Icon :iconName="'table-round'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TableRoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-round'
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
