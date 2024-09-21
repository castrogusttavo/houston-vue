
<template>
  <Icon :iconName="'location-offline-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationOffline04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-offline-04'
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
