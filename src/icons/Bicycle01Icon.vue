
<template>
  <Icon :iconName="'bicycle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bicycle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bicycle-01'
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
