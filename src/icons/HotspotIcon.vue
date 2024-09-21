
<template>
  <Icon :iconName="'hotspot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotspotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hotspot'
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
