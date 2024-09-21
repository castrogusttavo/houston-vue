
<template>
  <Icon :iconName="'filter-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-vertical'
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
