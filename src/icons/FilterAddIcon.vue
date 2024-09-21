
<template>
  <Icon :iconName="'filter-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-add'
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
