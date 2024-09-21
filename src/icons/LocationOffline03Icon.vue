
<template>
  <Icon :iconName="'location-offline-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationOffline03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-offline-03'
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
