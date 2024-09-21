
<template>
  <Icon :iconName="'table-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Table01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-01'
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
