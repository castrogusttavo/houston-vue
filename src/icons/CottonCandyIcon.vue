
<template>
  <Icon :iconName="'cotton-candy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CottonCandyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cotton-candy'
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
