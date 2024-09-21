
<template>
  <Icon :iconName="'insert-row'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertRowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-row'
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
