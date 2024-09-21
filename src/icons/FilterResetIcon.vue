
<template>
  <Icon :iconName="'filter-reset'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterResetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-reset'
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
