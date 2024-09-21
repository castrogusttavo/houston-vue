
<template>
  <Icon :iconName="'insert-row-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertRowDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-row-down'
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
