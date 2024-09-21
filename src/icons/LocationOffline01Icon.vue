
<template>
  <Icon :iconName="'location-offline-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationOffline01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-offline-01'
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
