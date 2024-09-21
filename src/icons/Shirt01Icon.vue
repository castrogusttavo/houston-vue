
<template>
  <Icon :iconName="'shirt-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shirt01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shirt-01'
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
