
<template>
  <Icon :iconName="'filter-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-horizontal'
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
