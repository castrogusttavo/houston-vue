
<template>
  <Icon :iconName="'ungroup-layers'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UngroupLayersIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ungroup-layers'
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
