
<template>
  <Icon :iconName="'insert-column-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertColumnLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-column-left'
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
