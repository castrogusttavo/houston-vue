
<template>
  <Icon :iconName="'maps-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-circle-01'
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
