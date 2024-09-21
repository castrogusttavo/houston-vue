
<template>
  <Icon :iconName="'insert-row-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertRowUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-row-up'
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
