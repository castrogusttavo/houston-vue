
<template>
  <Icon :iconName="'information-diamond'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InformationDiamondIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'information-diamond'
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
