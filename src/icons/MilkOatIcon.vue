
<template>
  <Icon :iconName="'milk-oat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MilkOatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'milk-oat'
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
