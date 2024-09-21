
<template>
  <Icon :iconName="'map-pinpoint-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapPinpoint01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'map-pinpoint-01'
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
