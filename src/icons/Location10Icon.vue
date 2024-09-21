
<template>
  <Icon :iconName="'location-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-10'
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
