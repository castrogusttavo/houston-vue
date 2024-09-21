
<template>
  <Icon :iconName="'luggage-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Luggage01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'luggage-01'
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
