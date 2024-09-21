
<template>
  <Icon :iconName="'insert-column'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertColumnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-column'
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
