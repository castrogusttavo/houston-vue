
<template>
  <Icon :iconName="'plant-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plant01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plant-01'
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
