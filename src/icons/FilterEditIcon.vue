
<template>
  <Icon :iconName="'filter-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-edit'
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
