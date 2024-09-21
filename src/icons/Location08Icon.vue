
<template>
  <Icon :iconName="'location-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-08'
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
