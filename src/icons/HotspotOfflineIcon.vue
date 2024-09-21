
<template>
  <Icon :iconName="'hotspot-offline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotspotOfflineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hotspot-offline'
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
