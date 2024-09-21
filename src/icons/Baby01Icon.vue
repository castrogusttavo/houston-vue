
<template>
  <Icon :iconName="'baby-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Baby01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-01'
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
