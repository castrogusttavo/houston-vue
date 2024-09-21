
<template>
  <Icon :iconName="'row-delete'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RowDeleteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'row-delete'
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
