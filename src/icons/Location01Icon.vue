
<template>
  <Icon :iconName="'location-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-01'
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
