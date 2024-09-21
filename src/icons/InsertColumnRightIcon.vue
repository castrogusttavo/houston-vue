
<template>
  <Icon :iconName="'insert-column-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertColumnRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-column-right'
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
