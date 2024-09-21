
<template>
  <Icon :iconName="'maps-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-square-01'
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
