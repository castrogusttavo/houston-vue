
<template>
  <Icon :iconName="'store-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StoreAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-add-01'
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
