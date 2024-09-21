
<template>
  <Icon :iconName="'text-variable-front'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextVariableFrontIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-variable-front'
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
