
<template>
  <Icon :iconName="'bread-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bread01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bread-01'
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
