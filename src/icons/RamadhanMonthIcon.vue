
<template>
  <Icon :iconName="'ramadhan-month'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RamadhanMonthIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ramadhan-month'
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
