
<template>
  <Icon :iconName="'car-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Car01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-01'
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
