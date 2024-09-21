
<template>
  <Icon :iconName="'kurta-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Kurta01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kurta-01'
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
