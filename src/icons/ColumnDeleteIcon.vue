
<template>
  <Icon :iconName="'column-delete'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ColumnDeleteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'column-delete'
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
