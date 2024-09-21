
<template>
  <Icon :iconName="'maps-location-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsLocation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-location-01'
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
